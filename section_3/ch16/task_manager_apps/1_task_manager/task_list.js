'use strict';

let $ = function(id) {
  return document.getElementById(id);
}

let tasks = [];

let displayTaskList = function(){
  //* get tasks from storage and load them into the array
  let storage = localStorage.getItem('tasks_16_1') || null;
  tasks = JSON.parse(storage) || [];

  //* create capitalized tasks
  let capitalized = tasks.map(function(value){
    let first = value.task.substring(0,1); //? get first letter
    let remaining = value.task.substring(1); //? get remaining letters
    return { task: first.toUpperCase() + remaining, date: value.date };
  });

  //* display capitalized tasks, set focus on task text box
  $('task_list').value = capitalized.reduce(function(intValue, value) {
    return intValue.concat(value.date, " - ", value.task, '\n');
  }, ''); //? empty string as initial value
  $('task').focus();
}

let addToTaskList = function() {
  let task = $('task');
  let taskDate = $('task_date');
  let date = new Date(taskDate.value);

  if (task.value === '' || date === '' || date.toString() === "Invalid Date"){
    alert('Please enter a task and date.');
  } else {
    //* add task to array and reset local storage
    tasks.push( {task: task.value, date: date.toDateString() });
    localStorage.setItem('tasks_16_1', JSON.stringify(tasks));

    //* clear text boxes and redisplay tasks
    task.value = '';
    taskDate.value = '';
    displayTaskList();
  }
}

let clearTaskList = function() {
  tasks.length = 0;
  localStorage.setItem('tasks_16_1', '');
  displayTaskList();
}

window.onload = function() {
  $('add_task').onclick = addToTaskList;
  $('clear').onclick = clearTaskList;
  displayTaskList();
}