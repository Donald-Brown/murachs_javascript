'use strict';
let createSlideShow = function(){
  //? private variable and functions
  let timer, play = true, speed = 2000;
  let nodes = {
    image: null, 
    caption: null
  };
  let img = {
    cache: [],
    counter: 0
  };
  let stopSlideShow = function(){
    clearInterval(timer);
  };

  let displayNextImage = function(){
    img.counter = ++img.counter % img.cache.length;
    let image = img.cache[img.counter];
    nodes.image.src = image.src;
    nodes.caption.firstChild.nodeValue = image.title;
  }

  let setPlayText = function(btn){
    btn.value = (play) ? 'Resume' : 'Pause';
  }

  //? public methods that have access to private variables and functions
  return {
    loadImages: function(slides){
      let image;
      for(let i = 0; i < slides.length; i++){
        image = new Image();
        image.src = 'images/' + slides[i].href;
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
      timer = setInterval(displayNextImage, speed);
      return this;
    },
    createToggleHandler: function(){
      let me = this;
      //* closure to be used as the click handler
      return function(){
        //* 'this' is the clicked button; 'me' is the object literal
        if(play){
          stopSlideShow();
        }else{
          me.startSlideShow();
        }
        setPlayText(this);
        play = !play; //! Toggle play flag
      }
    }
  }
}