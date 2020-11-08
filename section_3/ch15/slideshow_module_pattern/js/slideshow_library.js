'use strict';
//* create the namespace used by the application
var myApp = myApp || {};

//* create a single slideshow object with private state using the module pattern
myApp.slideShow = (function(){
  //? private variables and functions
  let timer, play = true;
  let nodes = { image: null, caption: null }
  let img = { cache: [], counter: 0 };

  let stopSlideShow = function() {
    clearInterval(timer);
  }

  let displayNextImage = function(){
    img.counter = ++img.counter % img.cache.length;
    let image = img.cache[img.counter];
    nodes.image.src = image.src;
    nodes.caption.firstChild.nodeValue = image.title;
  }

  let setPlayText = function(btn){
    btn.value = (play) ? 'Resume' : 'Pause';
  }

  //* public properties/methods - make speed public so it's accessable to outside code
  return {
    speed: 2000, 
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
      stopSlideShow(); //* stop previously running slide show
      timer = setInterval(displayNextImage, this.speed);
      return this;
    },
    createToggleHandler: function(){
      let that = this;
      //* closure to be used as the click event handler
      return function(){
        //* value of this is the clicked button
        if(play){
          stopSlideShow();
        }else{
          that.startSlideShow();
        }
        setPlayText(this);
        play = !play; //* toggle play flag
      }
    }
  }
})();