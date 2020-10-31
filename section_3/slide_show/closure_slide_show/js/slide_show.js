'use strict';

let $ = function(id){
  return document.getElementById(id);
}

window.onload = function(){
  //? create slides show object
  let slideShow = createSlideShow();

  let slides = [
    {href: 'gear.jpg', title: 'Fishing Gear'},
    {href: 'plane.jpg', title: 'Bush Plane'},
    {href: 'release.jpg', title: 'Catch and Release'},
    {href: 'lunch.jpg', title: 'Streamside Lunch'},
    {href: 'dusk.jpg', title: 'Day\'s End'}
  ];
  //? slideShow.speed = 500; // adds a new property called speed doesn't do anything
  //? slideShow.speed = []; // ditto
  slideShow.loadImages(slides).startSlideShow($('image'), $('caption'));
  $('play_pause').onclick = slideShow.createToggleHandler();
}