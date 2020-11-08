//* create the myApp namespace and the nested namespace creator function

var myApp = myApp || {};

myApp.addNamespace = function(namespace){
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


//* add the nested namespaces the application will use
//* myApp.addNamespace('tasklist').addNamespace('Task').addNamespace('prototype').addNamespace('storage'); // chain any additional namespaces you need

//! exercises instructed to add then remove namespaces