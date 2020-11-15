'use strict';

let $ = function(id) {
  return document.getElementById(id);
}

let tasks = [];

let displayTaskList = function() {
  let storage = localStorage.getItem('tasks_16_2') || null;
  tasks = JSON.parse(storage) || [];

  //* display tasks
  $('task_list').value = tasks.join('\n');

  //* set focus on task text box
  $('task').focus();
}

let addToTaskList = function() {
  let task = $('task');
  let taskDate = $('task_date');
  let date = new Date(taskDate.value);

  if (task.value === '' || date === '' || date.toString() === 'Invalid Date') {
    alert('Please enter a task and a date');
  } else {
    //* add task to array and local storage
    tasks.push(new Task(task.value, date));
    localStorage.setItem('tasks_16_2', JSON.stringify(tasks));

    //* clear text boxes and re-display tasks
    task.value = '';
    taskDate.value = '';
    displayTaskList();
  }
}

let clearTaskList = function() {
  tasks.length = 0;
  localStorage.setItem('tasks_16_2', '');
  displayTaskList();
}

window.onload = function() {
  $('add_task').onclick = addToTaskList;
  $('clear_tasks').onclick = clearTaskList;
  displayTaskList();
}