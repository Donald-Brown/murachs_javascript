'use strict';

let $ = function(id){
  return document.getElementById(id);
}

let taskList;

let addToTasklist = function(){
  let taskTextBox = $('task');
  let newTask = new Task(taskTextBox.value);
  if(newTask.isValid()){
    taskList.add(newTask).save().reload().display();
    taskTextBox.value = '';
  }else{
    alert('Please enter a task.');
  }
  taskTextBox.focus();
}

let deleteFromTaskList = function(){
  taskList.delete(this.title).save().display(); //* 'this' = clicked link
  $('task').focus();
}

let clearTaskList = function(){
  taskList.clear();
  $('task').focus();
}

let boldExclamationPoint = function bold(node){
  //? if there are child nodes, loop through them and call funtion for each one
  if(node.childNodes && node.childNodes.length > 0){
    for(let i in node.childNodes){
      bold(node.childNodes[i]);//* recusive - calls itself
    }
  }else{//* add bold tags if node has a an exclamation point
    if(node.nodeValue && node.nodeValue.indexOf('!') > -1){
      let span = node.parentNode;
      span.innerHTML = `<b>${node.nodeValue}</b>`;
    }
  }
}

window.onload = function(){
  $('add_task').onclick = addToTasklist;
  $('clear_tasks').onclick = clearTaskList;
  $('bold').onclick = function(){
    //! boldExcalmationPoints(document);
    boldExclamationPoint($('tasks'));
  }

  taskList = createTaskList($('tasks'), deleteFromTaskList);
  taskList.load().display();
  $('task').focus();
}