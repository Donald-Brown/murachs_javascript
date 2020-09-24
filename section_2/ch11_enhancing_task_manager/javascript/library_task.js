"use strick";
// let Task = function(task){
//   this.text = task;
// }
// Task.prototype.isValid = function(){
//   if(this.text === ""){
//     return false;
//   }else {
//     return true;
//   }
// }
// Task.prototype.toString = function(){
//   // capitalize
//   let first = this.text.substring(0,1);
//   return first.toUpperCase() + this.text.substring(1);
// }

let taskPrototype = {
  isValid: function(){
    if(this.text === ""){
      return false;
    }else{
      return true;
    }
  }, 
  toString: function(){
    let first = this.text.substring(0,1);
    return first.toUpperCase() + this.text.substring(1);
  }
}

let getTask = function(text){
  let task = Object.create(taskPrototype);
  task.text = text;
  return task;
}