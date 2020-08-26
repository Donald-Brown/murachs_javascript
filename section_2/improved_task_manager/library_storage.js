let getStorage = function(key){
  // Get string from storage or an empty string if nothing 
  let storage = localStorage.getItem(key) || '';
  if(storage === ''){
    return [];
  }else{
    return storage.split('|');
  }
}

let setStorage = function(key, arr){
  if(Array.isArray(arr)){
    let storageString = arr.join('|');
    localStorage.setItem(key, storageString);
  }
}

let clearStorage = function(key){
  localStorage.setItem(key, '');
}