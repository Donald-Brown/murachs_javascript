let Obj = function(parameter){
  this.parameter = parameter;

  this.newFunction = function(){
    console.log(`Hello ${this.parameter}`)
  }
}

Obj.prototype.showParameter = function(){
  console.log(this.parameter);
}

let newObj = new Obj('My shiny new object!');

console.dir(newObj);
newObj.showParameter();
newObj.newFunction();

newObj.evenNewerFunction = function(){
  console.log(`Goodbye ${this.parameter}`);
}
newObj.evenNewerFunction();

newObj.newProp = 'HI';
console.log(newObj.hasOwnProperty('newProp'))


console.log(newObj.hasOwnProperty('newFunction'));
console.log(newObj.hasOwnProperty('showParameter'));
console.log(newObj.hasOwnProperty('evenNewerFunction'));
console.log(newObj.hasOwnProperty('parameter'));
console.dir(newObj);

Obj2 = new Obj('new object 2');
console.dir(Obj2);

let obj = {
  prop: 'this is a prop'
}

console.log(obj.hasOwnProperty('prop'));
console.log(obj.hasOwnProperty('toString'));
console.log(obj.toString());