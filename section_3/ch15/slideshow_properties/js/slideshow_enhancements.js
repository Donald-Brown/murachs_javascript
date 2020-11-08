'use strict';

//* enhance the slide show object using the module pattern
(function(mod){
  mod.changeSpeed = function(newSpeed){
    this.slideShowSpeed = newSpeed;
    return this;
  }
})(myApp.slideShow); //! invoke IIFE, import module to be augmented