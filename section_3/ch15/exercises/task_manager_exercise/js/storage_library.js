'use strict';

let localStoragePrototype = {
  get: function(){
    return localStorage.getItem(this.key);
  },
  set: function(str){
    localStorage.setItem(this.key, str);
  },
  clear: function(){
    localStorage.setItem(this.key, '');
  }
}

let stringArrayStoragePrototype = Object.create
(localStoragePrototype);

stringArrayStoragePrototype.get = function(){
  let str =
  localStoragePrototype.get.call(this) || '';
  return (str === '') ? [] : str.split('|');
}

stringArrayStoragePrototype.set = function(arr){
  if(Array.isArray(arr)){
    let str = arr.join('|');
  
    localStoragePrototype.set.call(this, str);
  }
}

let getTaskStorage = function(key){
  let storage = Object.create
  (stringArrayStoragePrototype);
  storage.key = key;
  return storage;
}
