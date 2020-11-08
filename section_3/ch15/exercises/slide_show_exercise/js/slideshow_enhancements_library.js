'use strict';

/*
* augment the slideShow object using the module pattern:
* - add an IIFE
* - pass a parameter to the IIFE that will hold the module to be augmented
* - import the module to be augmented by passing it as an argument when the IIFE is invoked (it will populate the parameter in the last step)
* - add the changeCaption method and return the parameter holding the module
*/

(function(mod){
  //console.log(mod);
  mod.changeCaption = function(index, text){
    let current = this.getImages[index];
    current.title = text;

    return this;
  }
})(myApp.slideShow);