'use strict';

let Task = function(task, date) {
  this.text = task;
  this.date = date;
}

Task.prototype.toJSON = function() {
  //* get date parts
  let m = this.date.getMonth() + 1; //? correct for zero based month
  let d = this.date.getDate();
  let y = this.date.getFullYear();

  //* get task parts 
  let first = this.text.substring(0,1).toUpperCase();
  let remaining = this.text.substring(1);

  //* return short date string and capitalized task
  return m + '/' + d + '/' + y + ' - ' + first + remaining;
}