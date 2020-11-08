'use strict';
(function(){
  let $ = function(id){
    return document.getElementById(id);
  }

  let addToTaskList = function(){
    let taskTextBox = $('task');
    let newTask = new Task(taskTextBox.value);
    if(newTask.isValid()){
      tasklist.add(newTask).save().display();
      taskTextBox.value = '';
    }else{
      alert('Please enter a task');
    }
    taskTextBox.focus();
  }

  let clearTaskList = function(){
    tasklist.clear();
    $('task').focus();
  }

  let deleteFromTaskList = function(){
    tasklist.delete(this.title).save().display(); //? 'this' is clicked link
    $('task').focus();
  }

  window.onload = function(){
    $('add_task').onclick = addToTaskList;
    $('clear_tasks').onclick = clearTaskList;
  
    tasklist.displayDiv = $('tasks');
    tasklist.deleteClickHandler = deleteFromTaskList;
  
    tasklist.load().display();
    $('task').focus();
  
    //!console.log(myApp)
  }
})();

// let $ = function(id){
//   return document.getElementById(id);
// }

// let addToTaskList = function(){
//   let taskTextBox = $('task');
//   let newTask = new myApp.Task(taskTextBox.value);
//   if(newTask.isValid()){
//     myApp.tasklist.add(newTask).save().display();
//     taskTextBox.value = '';
//   }else{
//     alert('Please enter a task');
//   }
//   taskTextBox.focus();
// }

// let clearTaskList = function(){
//   myApp.tasklist.clear();
//   $('task').focus();
// }

// let deleteFromTaskList = function(){
//   myApp.tasklist.delete(this.title).save().display(); //? 'this' is clicked link
//   $('task').focus();
// }

// window.onload = function(){
//   $('add_task').onclick = addToTaskList;
//   $('clear_tasks').onclick = clearTaskList;

//   myApp.tasklist.displayDiv = $('tasks');
//   myApp.tasklist.deleteClickHandler = deleteFromTaskList;

//   myApp.tasklist.load().display();
//   $('task').focus();

//   //!console.log(myApp)
// }