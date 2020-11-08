'use strict';

//* augment the slide show object using the module pattern:
//* - use an IIFE
//* - import the module to be augmented by passing it as an argument to the
//* IIFE (the variable mod)
//* - add properties or methods to the module

(function(mod){
  mod.changeSpeed = function(speed){
    let newSpeed = parseInt(speed);
    this.speed = (newSpeed < 200) || isNaN(newSpeed) ? 2000 : newSpeed;
    return this; //* so method can be chained
  }
})(myApp.slideShow); //* invoke IIFE, import module to be augmented
