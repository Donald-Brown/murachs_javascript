'use strict';

var myApp = myApp || {};

//* create a singleton slideshow object with private state using the module pattern
//* create a custom slideshow speed property using the Object.create method

myApp.slideShow = (function(){
  //? private variables and functions
  let timer, play = true, speed = 2000;
  let nodes = { image: null, caption: null };
  let img = { cache: [], counter: 0 };

  let stopSlideShow = function(){
    clearInterval(timer);
  }

  let displayNextImage = function(){
    img.counter = ++img.counter % img.cache.length;
    let image = img.cache[img.counter];
    nodes.image.src = image.src;
    nodes.caption.firstChild.nodeValue = image.title;
  }

  let setplaytext = function(btn){
    btn.value = (play) ? 'Resume' : 'Pause';
  }

  //* public methods
  let prototype = {
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
      stopSlideShow(); //? stop any previous slide show
      timer = setInterval(displayNextImage, speed);
      return this;
    },
    createToggleHandler: function(){
      let that = this;
      //* closure to be used as the click event handler
      return function(){
        //? the value of this is the clicked button
        if(play){
          stopSlideShow();
        }else{
          that.startSlideShow();
        }
        setplaytext(this);
        play = !play; //? toggle play flag
      }
    }
  };

  //* public properties
  let properties = {
    slideShowSpeed: { //? accessor property
      get: function(){
        return speed;
      },
      set: function(newSpeed){
        let ns = parseInt(newSpeed);
        speed = (ns < 200) || isNaN(ns) ? 2000 : ns;
      },
      enumerable: true,
      configurable: false
    }
  };

  //* create and export slideshow module object
  return Object.create(prototype, properties);
})();