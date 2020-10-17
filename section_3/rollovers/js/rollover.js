"use strict";

let $ = function(id){
  return document.getElementById(id);
}

let createRollover = function(imgTag, secondUrl, secondAlt){
  //store first image info
  let firstUrl = imgTag.src;
  let firstAlt = imgTag.alt;

  // preload second image
  let image = new Image();
  image.src = secondUrl;

  //create event handlers
  let mouseover = function(){
    imgTag.src = secondUrl;
    imgTag.alt = secondAlt;
  }

  let mouseout = function(){
    imgTag.src = firstUrl;
    imgTag.alt = firstAlt;
  }

  // attach event handlers
  evt.attach(imgTag, 'mouseover', mouseover);
  evt.attach(imgTag, 'mouseout', mouseout);
}

window.onload = function(){
  createRollover($('img1'), 'images/hero.jpg', 'Hero photo');
  createRollover($('img2'), 'images/deer.jpg', 'Deer near lodge');
}