'use strict';
let getTasks = function() {
  let reviver = function(key, value) {
    //* works it way up through the object
    if (key === ''){ //? value is the array of task objects
      //* sort task by date
      value.sort(function(a,b) {
        return a.date - b.date;
      });

      //* add a display string that combines short date and task
      value.display = value.reduce(function(intValue, value) {
        return intValue.concat(value.date.short, ' - ', value.task, '\n');
      }, ''); //? pass empty string as initial value to reduce method

      return value;
    } else {
      let date = new Date(value);
      if (date.toString() === 'Invalid Date') {
        return value;
      } else {
        let m = date.getMonth() + 1; //? correct zero based month
        date.short = m + '/' + date.getDate() + '/' + date.getFullYear();
        return date;
      }
    }
  }
  let storage = localStorage.getItem('tasks_16_3') || '';
  return (storage === '') ? [] : JSON.parse(storage, reviver);
}


let setTasks = function(tasks) {
  let replacer = function(key, value) {
    if (key === '') {
      return value;
    }
    if (typeof value === 'string') {
      //* capitalize and return
      let first = value.substring(0,1);
      let remaining = value.substring(1);
      return first + remaining;
    } else {
      return value;
    }
  }
  let json = JSON.stringify(tasks, replacer);
  localStorage.setItem('tasks_16_3', json);
}

let clearTasks = function() {
  localStorage.setItem('tasks_16_3', '');
}