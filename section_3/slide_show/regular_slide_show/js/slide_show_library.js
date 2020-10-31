"use strict";

let slideShow = {
  timer: null,
  nodes: {
    image: null,
    caption: null
  },
  img: {
    cache: [],
    counter: 0
  },
  play: true,
  speed: 2000,
  loadImages: function(slides){
    let image;
    for(let i in slides){
      //? Preload image, copy title properties, and save in array
      image = new Image();
      image.src = slides[i].href;
      image.title = slides[i].title;
      this.img.cache.push(image);
    }
    return this;
  },
  startSlideShow: function(){
    if(arguments.length === 2){
      this.nodes.image = arguments[0];
      this.nodes.caption = arguments[1];
    }
    /*
    ? set Interval is invoked normally, so 'this' in displayNextImage will be the window object or undefined. Use bind to make sure 'this' in displayNextImage is the slideShow object instead.
    */
    this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
    return this;
  },
  pauseSlideShow: function(){
    clearInterval(this.timer);
    return this;
  }, 
  displayNextImage: function(){
    this.img.counter = ++this.img.counter % this.img.cache.length;
    let image = this.img.cache[this.img.counter];
    this.nodes.image.src = image.src;
    this.nodes.caption.firstChild.nodeValue = image.title;
  },
  setPlayText: function(a){
    a.text = (this.play) ? "Resume" : "Pause";
    return this;
  },
  /**
   * ? togglePlay is invoked as an event handler, so 'this' should be the clicked link. Check to make sure, and don't do anything if it isn't. Since 'this' is link, can't use it to access slideShow object properties and methods.
   */
   togglePlay: function(e){
     if(slideShow.play){
       slideShow.pauseSlideShow().setPlayText(this);
     }else{
       slideShow.startSlideShow().setPlayText(this);
     }
     slideShow.play = !slideShow.play; //* toggle play flag
     evt.preventDefault(e);
   }
}