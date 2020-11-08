'use strict';
myApp.tasklist.sort = function(tasks){
  let isArray = Array.isArray(tasks);
  if(isArray){
    tasks.sort();
    }
  return isArray;
}

myApp.tasklist.display = function(tasks, div, handler){
  let html = '';
  let isArray = myApp.tasklist.sort(tasks);

  if(isArray){
    //* create and load html string from sorted array
    for(let i in tasks){
      html += 
      `
        <p>
          <a href="#" title="${i}">Delete</a>${tasks[i]}
        </p>
      `;
    }
    div.innerHTML = html;

    //* get links, loop and add onclick event handler
    let links = div.getElementsByTagName('a');
    for(let i = 0; i < links.length; i++){
      links[i].onclick = handler;
    }
  }
}

myApp.tasklist.delete = function(tasks, i){
  let isArray = myApp.tasklist.sort(tasks);
  if(isArray){
    tasks.splice(i, 1);
  }
}

myApp.tasklist.capitalize = function(task){
  let first = task.substring(0, 1);
  return first.toUpperCase() + task.substring(1);
}