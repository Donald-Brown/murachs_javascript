'use strict';
let $ = function(id) {
  return document.getElementById(id);
}

let tasks = [];

let displayTaskList = function() {
  //* get tasks from storage
  tasks = getTasks();

  //* display tasks, or empty string if no tasks
  $('task_list').value = (tasks.display) ? tasks.display : '';

  //* set focus on task text box
  $('task').focus();
}

let addToTaskList = function() {
  let task = $('task');
  let taskDate = $('task_date');
  let date = new Date(taskDate.value);

  if (task.value === '' || date === '' || date.toString() === 'Invalid Date') {
    alert('Please enter a task and date.');
  } else {
    //* add task to array and local storage
    tasks.push( { task: task.value, date: date } );
    setTasks(tasks);

    //* clear text box and re-display tasks
    task.value = '';
    taskDate.value = '';
    displayTaskList();
  }
}

let clearTaskList = function() {
  tasks.length = 0;
  clearTasks();
  displayTaskList();
}

window.onload = function() {
  $('add_task').onclick = addToTaskList;
  $('clear_tasks').onclick = clearTaskList;
  displayTaskList();
}