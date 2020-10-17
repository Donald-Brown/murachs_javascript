// to preload the second image
let secondImage = new Image();
secondImage.src = "images/s2_1000x750.JPG"

let showFirstImage = function(){
  // 'this' = image that triggered the event
  this.src = "images/main_combo_1000x750.JPG";
}

let showSecondImage = function(){
  // 'this' = image that triggered the event
  this.src = secondImage.src;
  this.title = "S2 Image";
}

window.onload = function(){
  let image = document.getElementById('rollover');

  // attach event handlers
  image.addEventListener('mouseover', showSecondImage);
  image.addEventListener('mouseout', showFirstImage);
}