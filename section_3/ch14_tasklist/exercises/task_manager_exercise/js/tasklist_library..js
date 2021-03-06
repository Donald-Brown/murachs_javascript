'use strict';

let createTaskList = function(div, handler){
  //? private variables and functions
  let tasks = [];
  let storage = getStorage('tasks_14e');
  let sort = function(){
    tasks.sort();
  }

  //? private callback functions to pass to storage get and set methods
  let getTasks = function(storageString){
    let stringsArr = (storageString === '') ? [] : storageString.split('|');
    let newArr = [];
    for(let i in stringsArr){
      let newString = '';
      let indexOfSpace = stringsArr[i].indexOf(' ');
      if(indexOfSpace === -1){
        newString = stringsArr[i].toUpperCase();
      }else{
        newString = stringsArr[i].substring(0, indexOfSpace).toUpperCase() + stringsArr[i].substring(indexOfSpace);
      }
      newArr.push(newString);
    }
    return newArr;
    //!return (storageString === '') ? [] : storageString.split('|');
  }
  let setTasks = function(arr){
    return (Array.isArray(arr)) ? arr.join('|') : arr;
  }

  //? public methods that have access to private variables and functions
  return {
    load: function(){
      if(tasks.length === 0){
        tasks = storage.get(getTasks);
      }return this;
    },
    reload: function(){
      tasks = storage.get(getTasks);
      return this;
    },
    save: function(){
      storage.set(tasks, setTasks);
      return this;
    },
    add: function(task){
      tasks.push(task);
      return this;
    },
    delete: function(i){
      sort();
      tasks.splice(i, 1);
      return this;
    }, 
    clear: function(){
      tasks.length = 0;
      storage.clear();
      div.innerHTML = '';
      return this;
    },
    display: function(){
      sort();
      let html = '';
      for(let i in tasks){
        html += 
        `
          <p>
            <a href="#" title="${i}">Delete</a>
            <span> ${tasks[i].toString()}</span>  
          </p>
        `;
      }
      div.innerHTML = html;
      let links = div.getElementsByTagName('a');
      for(let i = 0; i < links.length; i++){
        links[i].onclick = handler;
      }
      return this;
    }
  }
}