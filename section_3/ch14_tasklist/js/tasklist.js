'use strict';

let $ = function(id){
  return document.getElementById(id);
}

let tasklist;

let addToTaskList = function(){
  let taskTextBox = $('task');
  let newTask = new Task(taskTextBox.value);
  if(newTask.isValid()){
    tasklist.add(newTask).save().display();
    taskTextBox.value = '';
  }else{
    alert('Please enter a task.');
  }
  taskTextBox.focus();
}

let deleteFromTaskList = function(){
  tasklist.delete(this.title).save().display(); //* 'this' = clicked link
  $('task').focus();
}
let clearTaskList = function(){
  tasklist.clear();
  $('task').focus();
}

let boldExclamationPoint = function bold(node){
  //? if there are child nodes, loop them and call function for each one
  if(node.childNodes && node.childNodes.length > 0){
    for(let i in node.childNodes){
      bold(node.childNodes[i]); //* recursion - calls itself
    }
  }else { //* add bold tags if node has an exclamation point
    if(node.nodeValue && node.nodeValue.indexOf('!') > -1){
      let span = node.parentNode;
      span.innerHTML = `<b>${node.nodeValue}</b>`;
    }
  }
}

window.onload = function(){
  $('add_task').onclick = addToTaskList;
  $('clear_tasks').onclick = clearTaskList;
  $('bold').onclick = function(){
    //? boldExcalmationPoint(document);
    boldExclamationPoint($('tasks'));
  }

  tasklist = createTaskList($('tasks'), deleteFromTaskList);
  tasklist.load().display();
  $('task').focus();
}
