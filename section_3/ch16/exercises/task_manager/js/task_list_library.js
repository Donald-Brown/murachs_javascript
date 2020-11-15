'use strict';

let tasklist = {
  tasks: [],
  storage: getTaskStorage('ex_16'),
  displayDiv: null,
  deleteClickHandler: null,
  load: function() {
    tasklist.tasks = this.storage.get();
    return this;
  },
  save: function() {
    this.storage.set(this.tasks);
    return this;
  },
  sort: function() {
    this.tasks.sort(function(a,b) {
      return a.date - b.date;
    });
    return this;
  },
  add: function(task) {
    this.tasks.push(task);
    return this;
  },
  delete: function(i) {
    this.sort();
    this.tasks.splice(i, 1);
    return this;
  },
  clear: function() {
    this.tasks.length = 0;
    this.storage.clear();
    this.displayDiv.innerHTML = '';
    return this;
  },
  display: function() {
    let html = '';
    this.sort();

    //* create and load html string form sorted array
    for (let i in this.tasks) {
      html += 
      `
        <p>
          <a href="#" title="${i}">Delete</a> ${this.tasks[i].shortDate} - ${this.tasks[i].text}
        </p>
      `
    }
    this.displayDiv.innerHTML = html;

    //* get links, loop and add onclick event handler
    let links = this.displayDiv.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      links[i].onclick = this.deleteClickHandler;
    }
    return this;
  }
}