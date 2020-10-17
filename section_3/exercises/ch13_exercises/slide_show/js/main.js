"use strict";

let $ = function(id){
  return document.getElementById(id);
}

// let changeSpeed = function(e){
//   let milliseconds = prompt(`Current speed is ${slideShow.speed} milliseconds.\nPlease enter a new speed in milliseconds.`, '2000');

//   if(milliseconds === null){
//     milliseconds = slideShow.speed;
//   }else if(isNaN(milliseconds)){
//     alert('Please enter a valid number.');
//     changeSpeed(e);
//   }else{
//     slideShow.speed = milliseconds;
//     slideShow.pauseSlideShow().startSlideShow();
//     //! console.log(e);
//     
//   }
//   evt.preventDefault(e);
//   return this;
// }

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
  //! slideShow.pauseSlideShow();
  evt.attach($('change_speed'), 'click', slideShow.changeSpeed);
}