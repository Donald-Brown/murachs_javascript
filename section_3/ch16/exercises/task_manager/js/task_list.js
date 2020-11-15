'use strict';

let $ = function(id) {
  return document.getElementById(id);
}

let addToTaskList = function() {
  let taskTextBox = $('task');
  let dateTextBox = $('date');
  let newTask = new Task(taskTextBox.value, dateTextBox.value);
  if (newTask.isValid()) {
    tasklist.add(newTask).save().load().display();
    taskTextBox.value = '';
    dateTextBox.value = '';
  } else {
    alert('Please enter a task.');
  }
  taskTextBox.focus();
}

let clearTaskList = function() {
  tasklist.clear();
  $('task').focus();
}

let deleteFromTaskList = function() {
  tasklist.delete(this.title).save().display(); //? 'this' clicked link
  $('task').focus();
}

window.onload = function() {
  $('add_task').onclick = addToTaskList;
  $('clear_tasks').onclick = clearTaskList;

  tasklist.displayDiv = $('tasks');
  tasklist.deleteClickHandler = deleteFromTaskList;

  tasklist.load().display();
  $('task').focus();
}