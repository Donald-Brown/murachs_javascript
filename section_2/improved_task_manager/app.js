let $ = function(id){
  return document.getElementById(id);
}

let tasks = [];

let displayTaskList = function(){
  // get from storage
  if(tasks.length === 0){
    tasks = getStorage('tasks_ch10');
  }

  // display tasks with delete link
  displaySortedTaskList(tasks, $('tasks'), deleteFromTaskList, editTaskListItem);

  // set focus
  $('task').focus();
}

let addToTaskList = function(){
  let task = $('task');
  if(task.value === ''){
    alert('Please enter a task.');
  }else{
    tasks.push(capitalizeTask(task.value));
    setStorage('tasks_ch10', tasks);

    task.value = '';
    displayTaskList();
  }
}

let deleteFromTaskList = function(){
  deleteTask(tasks, this.id);  // 'this' = clicked link
  setStorage('tasks_ch10', tasks);
  displayTaskList();
}

let editTaskListItem = function(){
  // let newText = prompt('Please enter new text', tasks[this.title]);
  let newText = prompt('Please enter new text');
  if(newText){
    editTask(tasks, this.title, capitalizeTask(newText));
    setStorage('tasks_ch10', tasks);
    displayTaskList();
  }
}

let clearTaskList = function(){
  tasks.length = 0;
  clearStorage('tasks_ch10');
  $('tasks').innerHTML = '';
  $('task').focus();
}

window.onload = function(){
  $('add_task').onclick = addToTaskList;
  $('clear_tasks').onclick = clearTaskList;
  displayTaskList();
}

// let padLeft = function(text, width, pad){
//   if(arguments.length < 2){
//     return '';
//   }

//   if(arguments.length === 2){
//     pad = ' ';
//   }

//   while(text.length < width){
//     text = pad + text;
//   }
//   return text;
// }

// console.log(`Hello ${padLeft("world", 18)}`);