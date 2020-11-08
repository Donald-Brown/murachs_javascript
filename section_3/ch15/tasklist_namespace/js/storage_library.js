'use strict';
myApp.utility.storage.get = function(key){
  //? get string from storage or an empty string if nothing in storage
  let storage = localStorage.getItem(key) || '';
  if(storage === ''){
    return [];
  }else{
    return storage.split('|');
  }
}

myApp.utility.storage.set = function(key, arr){
  if(Array.isArray(arr)){
    let storageString = arr.join('|');
    localStorage.setItem(key, storageString);
  }
}

myApp.utility.storage.clear = function(key){
  localStorage.setItem(key, '');
}