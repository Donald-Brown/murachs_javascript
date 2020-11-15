'use strict';
let Task = function(task, date) {
  this.text = task;
  this.date = new Date(date);
}

Task.prototype.isValid = function() {
  if (this.text === '' || this.date.toString() === 'Invalid Date') {
    return false;
  } else {
    return true;
  }
}

Task.prototype.toJSON = function() {
  //*get date parts 
 let m = this.date.getMonth() + 1; //? correct zero based month
  let d = this.date.getDate();
  let y = this.date.getFullYear();

  this.shortDate = m + '/' + d + '/' + y;
  this.text = this.text.capitalize();
  return this;
}