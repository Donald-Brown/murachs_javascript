let $ = function(id){
  return document.getElementById(id);
}

let tasks = [];
let sortDirection = 'ASC';

// let displayTaskList = function(){
//   let capitalized = '';
//   // if tasks array is empty check local storage
//   if(tasks.length === 0){
//     // get tasks from storage or empty string
//     let storage = localStorage.getItem('tasks') || '';

//     // if not empty, convert to array and store in tasks 
//     if(storage.length > 0){
//       tasks = storage.split('|');
//     }
//   }

//   // if tasks, sort and create tasks string
//   if(tasks.length > 0){
//     capitalized = tasks.sort().map(value => {
//       let first = value.substring(0, 1);
//       let remaining = value.substring(1);
//       return first.toUpperCase() + remaining;
//     });
//     // list = capitalized.join('\n');
//   }

//   // display tasks string and set focus
//   $('task_list').value = capitalized && capitalized.join('\n') || '';
//   $('task').focus();
//   console.log(tasks);
// }

var displayTaskList = function() {
  let name = sessionStorage.name || '';
  if(name != ''){
    $('name').innerHTML = `${name}'s `;
  }else{
    $('name').innerHTML = '';
  }


  var list = "";
  // if there are no tasks in tasks array, check storage
  if (tasks.length === 0) {
      // get tasks from storage or empty string if nothing in storage
      var storage = localStorage.getItem("tasks") || "";

      // if not empty, convert to array and store in global tasks variable
      if (storage.length > 0) { tasks = storage.split("|"); }
  }
  
  // if there are tasks in array, sort and create tasks string
  if (tasks.length > 0) {
      // tasks.sort();
      if(sortDirection === 'ASC'){
        tasks.sort();
      }else{
        tasks.reverse();
      }
      list = tasks.join("\n");
  }
  // display tasks string and set focus on task text box
  $("task_list").value = list;
  $("task").focus();
  //console.log(tasks);
}

let addToTaskList = function(){
  let task = $('task');
  if(task.value === ''){
    alert('Please enter a task');
  }
  else{
    // add task to array and local storage
    tasks.push(task.value);
    localStorage.tasks = tasks.join('|');

    // clear task box and re-fresh tasks
    task.value = '';
    displayTaskList();
  }
}

let clearTaskList = function(){
  tasks.length = 0;
  localStorage.tasks = '';
  displayTaskList();

  // $('task_list').value = '';
  // $('task').focus();
}

let deleteTask = function(){
  let index = prompt('Enter the index number to delete.');

  if(!isNaN(index)){
    tasks.splice(index, 1);
    localStorage.tasks = tasks.join('|');
    displayTaskList();
  }
}

let toggleSort = function(){
  sortDirection = (sortDirection === 'ASC') ? 'DESC' : 'ASC';
  //console.log(sortDirection);
  displayTaskList();
}

let setName = function(){
  let name = prompt('Please enter a name.');
  sessionStorage.name = name;
  displayTaskList();
}

let importantTasks = function(element){
  let lower = element.toLowerCase();
  if(lower.indexOf('important!') === -1){
    return false;
  }else{
    return true;
  }
}

let filterTasks = function(){
  let filtered = tasks.filter(importantTasks);
  $('task_list').value = filtered.join('\n');
}

window.onload = function(){
  $('add_task').onclick = addToTaskList;
  $('clear_tasks').onclick = clearTaskList;
  $('delete_task').onclick = deleteTask;
  $('toggle_sort').onclick = toggleSort;
  $('set_name').onclick = setName;
  $('filter_tasks').onclick = filterTasks;
  displayTaskList();
}