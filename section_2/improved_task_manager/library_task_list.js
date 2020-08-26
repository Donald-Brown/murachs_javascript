let sortTaskList = function(tasks){
  let isArray = Array.isArray(tasks);
  if(isArray){
    tasks.sort();
  }
  return isArray;
}

let displaySortedTaskList = function(tasks, div, deleteHandler, editHandler){
  let html = '';
  let isArray = sortTaskList(tasks);

  if(isArray){
    // create and load html string from sorted array
    // for(let i in tasks){
    //   html = html.concat('<p>');
    //   html = html.concat('<a href=\'#\' id=\'', i, '\'>Delete</a>');
    //   html = html.concat(tasks[i]);
    //   html = html.concat('</p>');
    // }
    for(let i in tasks){
      html += `<p>
                <a href='#' id='${i}'>Delete</a> <a href='#' title='${i}'>Edit</a>${tasks[i]}
              </p>`;
    }

    div.innerHTML = html;

    // get links, loop and add onclick handler 
    let links = div.getElementsByTagName('a');
    for(let i = 0; i < links.length; i++){
      if(links[i].innerHTML === 'Delete'){
        links[i].onclick = deleteHandler;
      }else{
        links[i].onclick = editHandler;
      }
    }
  }
}

// let deleteTask = function(tasks, i){
//   let isArray = sortTaskList(tasks);
//   if(isArray){
//     tasks.splice(i, 1);
//   }
// }

let deleteTask = function(){
  let isArray = sortTaskList.call(null, arguments[0]);
  if(isArray){
    tasks.splice(arguments[1], 1);
  }
}

let editTask = function(tasks, i, newText){
  if(Array.isArray(tasks)){
    tasks[i] = newText;
  }
}

let capitalizeTask = function(task){
  let first = task.substring(0, 1);
  return first.toUpperCase() + task.substring(1);
}