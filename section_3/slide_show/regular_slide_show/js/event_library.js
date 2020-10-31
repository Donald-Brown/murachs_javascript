"use strict";

let evt = {
  attach: function(node, eventName, handler){
    if(node.addEventListener){
      node.addEventListener(eventName, handler);
    }else if(node.attachEvent){
      node.attachEvent('on' + eventName, handler);
    }
  },

  detach: function(node, eventName, handler){
    if(node.removeEventListener){
      node.removeEventListener(eventName, handler);
    }else if(node.detachEvent){
      node.detachEvent('on' + eventName, handler);
    }
  },

  preventDefault: function(e){
    e = e || window.event;
    if(e.preventDefault){
      e.preventDefault();
    }else{
      return e.returnValue = false;
    }
  }
}