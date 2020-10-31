"use strict";

let $ = function(id){
  return document.getElementById(id);
}

window.onload = function(){
  let slides = [
    {
      href: "images/gear.jpg", 
      title: "Fishing Gear"
    },
    {
      href: "images/plane.jpg",
      title: "Bush Plane"
    },
    {
      href: "images/release.jpg",
      title: "Catch and Release"
    },
    {
      href: "images/lunch.jpg",
      title: "Streamside Lunch"
    },
    {
      href: "images/dusk.jpg",
      title: "Day's End"
    }
  ];
  //* slideShow.speed = 500; //speeds up the slide show
  //* slideShow.speed = []; // breaks slide show
  slideShow.loadImages(slides).startSlideShow($('image'), $('caption'));

  evt.attach($('play_pause'), 'click', slideShow.togglePlay);
  //!slideShow.pauseSlideShow();
}