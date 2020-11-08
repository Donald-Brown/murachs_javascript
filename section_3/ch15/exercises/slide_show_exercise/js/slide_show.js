'use strict';

window.onload = function(){
  let $ = function(id){
    return document.getElementById(id);
  }

  let slides = [
    { href: 'gear.jpg', title: 'Fishing Gear' },
    { href: 'plane.jpg', title: 'Bush Plane' },
    { href: 'release.jpg', title: 'Catch and Release' },
    { href: 'lunch.jpg', title: 'Streamside Lunch' },
    { href: 'dusk.jpg', title: 'Day\'s End' }
  ]
  myApp.slideShow.loadImages(slides).startSlideShow($('image'), $('caption'));

  $('play_pause').onclick = myApp.slideShow.createToggleHandler();
  $('change_speed').onclick = function(){
    let msg = 
    `
      Current speed is ${myApp.slideShow.getSpeed} milliseconds.\n
      Please enter a new speed in milliseconds (200 min).
    `;
    let ms = prompt(msg, 2000);
    myApp.slideShow.changeSpeed(ms).startSlideShow();
  }

  console.log(myApp.slideShow.getImages);

  $('change_caption').onclick = function(){
    let index = parseInt($('caption').title);
    let caption = prompt('Please enter a new caption.');
    myApp.slideShow.changeCaption(index, caption).startSlideShow();
    $('caption').firstChild.nodeValue = caption;
  }
}