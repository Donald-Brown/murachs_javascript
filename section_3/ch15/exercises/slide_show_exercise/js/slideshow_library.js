'use strict';

//* create namespace
let myApp = {};

myApp.slideShow = (function(){
  //? private variables and functions
  let timer, play = true, speed = 2000; //! private speed variable
  let nodes = { image: null, caption: null };
  let img = { cache: [], counter: 0 }; //! private img.cache array

  let stopSlideShow = function(){
    clearInterval(timer);
  }

  let displayNextImage = function(){
    img.counter = ++img.counter % img.cache.length;
    let image = img.cache[img.counter];
    let index = img.cache.indexOf(image); //! get array index of image object

    nodes.image.src = image.src;
    nodes.caption.firstChild.nodeValue = image.title;
    nodes.caption.title = index; //! store the index in caption span's title attribute
  }

  let setPlayText = function(btn){
    btn.value = (play) ? 'Resume' : 'Pause';
  }

  //* public slideShow object
  let slideShow = {
    loadImages: function(slides){
      let image;
      for(let i = 0; i < slides.length; i++){
        image = new Image();
        image.src = `images/${slides[i].href}`;
        image.title = slides[i].title;
        img.cache.push(image);
      }
      return this;
    },
    startSlideShow: function(){
      if(arguments.length === 2){
        nodes.image = arguments[0];
        nodes.caption = arguments[1];
      }
      stopSlideShow();
      timer = setInterval(displayNextImage, speed);
      return this;
    },
    changeSpeed: function(newSpeed){
      let ns = parseInt(newSpeed);
      speed = (ns < 200 || isNaN(ns)) ? 2000 : ns;
      return this;
    },
    createToggleHandler: function(){
      let that = this;

      return function(){
        if(play){
          stopSlideShow();
        }else{
          that.startSlideShow();
        }
        setPlayText(this);
        play = !play;
      }
    }
  }
  /*
  * Add code here to make read-only properties that return the 
  *private speed variable and the img.cache array
  */

  // Object.defineProperty(slideShow, 'getSpeed', {
  //   get: function() {
  //     return speed;
  //   }
  // });
  // Object.defineProperty(slideShow, 'getImages', {
  //   get: function(){ 
  //     return img.cache;
  //   }
  // });
  Object.defineProperties(slideShow, { getSpeed: { get: function(){ return speed; }
  }, getImages: { get: function(){ return img.cache } } });

  return slideShow;
})();