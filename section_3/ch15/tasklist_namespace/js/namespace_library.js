//* create the namespace and nested namespace creator function
let myApp = {};

myApp.addNameSpace = function(namespace){
  let currentName;
  let parent = this;
  let names = namespace.split('.');

  for(let i in names){
    currentName = names[i];
    parent[currentName] = parent[currentName] || {};
    parent = parent[currentName];
  }
  return this;
}.bind(myApp);

//* Add the namespaces the application will use
myApp.addNameSpace('tasklist').addNameSpace('utility.storage');