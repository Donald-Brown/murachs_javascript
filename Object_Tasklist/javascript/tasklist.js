let $ = function(id){
  return document.getElementById(id);
}

let addToTaskList = function(){
  let taskTextBox = $("task");
  let newTask = new Task(taskTextBox.value);
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
  tasklist.delete(this.title);         // this = clicked link
  tasklist.save();
  tasklist.display();
  $("task").focus();
}

window.onload = function(){
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;

  tasklist.deleteClickHandler = deleteFromTaskList;
  tasklist.displayDiv = $("tasks");

  tasklist.load();
  tasklist.display();
  $("task").focus();
}