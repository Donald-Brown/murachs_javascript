"use strict";
let $ = function(id){
  return document.getElementById(id);
}

let addToTaskList = function(){
  let taskTextBox = $("task");
  // let newTask = new Task(taskTextBox.value);
  let newTask = getTask(taskTextBox.value);
  if(newTask.isValid()){
    tasklist.add(newTask);
    tasklist.save();
    tasklist.display();
    taskTextBox.value = "";
  }else{
    alert("Please enter a task.");
  }
  taskTextBox.focus();
}

let clearTaskList = function(){
  tasklist.clear();
  $("task").focus();
}

let deleteFromTaskList = function(){
  tasklist.delete(this.title).save().display(); // 'this' = clicked link
  // tasklist.save();
  // tasklist.display();
  $("task").focus();
}

let editTaskListItem = function(){
  let newText = prompt("Please edit task", tasklist.tasks[this.title]);
  // let editedTask = new Task(newText);
  let editedTask = getTask(newText);
  if(editedTask.isValid()){
    tasklist.edit(this.title, editedTask).save().display();
    // tasklist.save();
    // tasklist.display();
    $("task").focus();
  }else{
    alert("Please enter a valid task.");
  }
}

window.onload = function(){
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;

  tasklist.displayDiv = $("tasks");
  tasklist.deleteClickHandler = deleteFromTaskList;
  tasklist.editClickHandler = editTaskListItem;

  tasklist.load();
  tasklist.display();

  $("task").focus();
}