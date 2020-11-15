'use strict';
let localStoragePrototype = {
  get: function() { 
    return localStorage.getItem(this.key);
  },
  set: function(str) {
    localStorage.setItem(this.key, str);
  },
  clear: function() {
    localStorage.setItem(this.key, '');
  }
}

let stringArrayStoragePrototype = Object.create(localStoragePrototype); //? inherit

stringArrayStoragePrototype.get = function() {
  let str = localStoragePrototype.get.call(this) || '';
  let reviver = function(key, value) {
    if (key === 'date') {
      return value = new Date(value);
    } else {
      return value;
    }
  }
  return (str === '') ? [] : JSON.parse(str, reviver);
}

stringArrayStoragePrototype.set = function(arr) {
  if (Array.isArray(arr)) {
    let str = JSON.stringify(arr);
    localStoragePrototype.set.call(this, str);
  }
}

let getTaskStorage = function(key) {
  let storage = Object.create(stringArrayStoragePrototype); //? inherit
  storage.key = key;    //? add own property
  return storage;
}