let tasklist = {
  tasks: [],                            // array to hold task objects
  storage: getTaskStorage("tasks_11"),  //storage object
  displayDiv: null,                     //div that displays task
  deleteClickHandler: null,             //delete ckick event handler
  load: function(){
    if(this.tasks.length === 0){
      tasklist.tasks = this.storage.get();
    }
  },
  save: function(){
    this.storage.set(this.tasks);
  },
  sort: function(){
    this.tasks.sort();
  },
  add: function(task){
    this.tasks.push(task.toString());    //calls the custom to string
  },                                    //method of the Task object
  delete: function(i){
    this.sort();
    this.tasks.splice(i, 1);
  }, 
  clear: function(){
    this.tasks.length = 0;
    this.storage.clear();
    this.displayDiv.innerHTML = "";
  },
  display: function(){
    let html = "";
    this.sort();

    // create and load html string from sorted array
    for(let i in this.tasks){
      html += `<p><a href="#" title="${i}">Delete</a>${this.tasks[i]}</p>`
    }
    this.displayDiv.innerHTML = html;

    // get links and add click event handlers
    let links = this.displayDiv.getElementsByTagName("a");
    for(let i = 0; i < links.length; i++){
      links[i].onclick = this.deleteClickHandler;
    }
  }
}