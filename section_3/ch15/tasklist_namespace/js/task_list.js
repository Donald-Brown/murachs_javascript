"use strict";
myApp.utility.$ = function(id) { return document.getElementById(id); };
//* Use IIFE so that local variables, aliases, and event handlers aren't 
//* added to global namespace but also aren't added to 'myapp' namespace
(function() {
  //? create local variable
  let tasks = [];
  
  //? create aliases
  let tasklist = myApp.tasklist;
  let u = myApp.utility;
  
  //? define the display function
  let displayTasks = function() {
      if (tasks.length === 0) {
          tasks = u.storage.get("tasks_15");
      }
      tasklist.display(tasks, u.$("tasks"), deleteFromTaskList);
      u.$("task").focus();
  };
  
  //? define the event handlers
  let addToTaskList = function() {    
      let task = u.$("task");
      if (task.value === "") {
          alert("Please enter a task.");
      } else {
          tasks.push(tasklist.capitalize(task.value));
          u.storage.set("tasks_15", tasks);

          task.value = "";
          displayTasks();
      }
  };
  let deleteFromTaskList = function() {
      tasklist.delete(tasks, this.title);
      u.storage.set("tasks_15", tasks);
      displayTasks();
  };
  let clearTaskList = function() {
      tasks.length = 0;
      u.storage.clear("tasks_15");
      u.$("tasks").innerHTML = "";
      u.$("task").focus();
  };
  
  //? onload event
  window.onload = function() {
      u.$("add_task").onclick = addToTaskList;
      u.$("clear_tasks").onclick = clearTaskList;   
      displayTasks();
  };
})(); //! invoke the IIFE
