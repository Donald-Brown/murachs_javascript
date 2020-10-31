'use strict';
let $ = function(id){
  return document.getElementById(id);
}

//? Create slide show object 
let slideShow = createSlideShow();

let changeSpeed = function(){
  let msg = `Please enter a new speed in milliseconds (200 min).\nCurrent speed is ${slideShow.getSpeed()}.`;
  let milliseconds = parseInt(prompt(msg, '2000'));
  //! call slideShow object methods here
  slideShow.setSpeed(milliseconds).startSlideShow();
}

window.onload = function(){
  let slides = [
    {href: 'gear.jpg', title: 'Fishing Gear'},
    {href: 'plane.jpg', title: 'Bush Plane'},
    {href: 'release.jpg', title: 'Catch and Release'},
    {href: 'lunch.jpg', title: 'Sreamside Lunch'},
    {href: 'dusk.jpg', title: 'Day\'s End'}
  ]
  slideShow.loadImages(slides).startSlideShow($('image'), $('caption'));
  $('play_pause').onclick = slideShow.createToggleHandler();
  $('change_speed').onclick = changeSpeed;
}