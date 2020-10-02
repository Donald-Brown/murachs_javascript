let Obj = function (parameter) {
  this.parameter = parameter;

  this.newFunction = function () {
    console.log(`Hello ${this.parameter}`);
  };
};

Obj.prototype.showParameter = function () {
  console.log(this.parameter);
};

let newObj = new Obj("My shiny new object!");

console.dir(newObj);
newObj.showParameter();
newObj.newFunction();

newObj.evenNewerFunction = function () {
  console.log(`Goodbye ${this.parameter}`);
};
newObj.evenNewerFunction();

newObj.newProp = "HI";
console.log(newObj.hasOwnProperty("newProp"));

console.log(newObj.hasOwnProperty("newFunction"));
console.log(newObj.hasOwnProperty("showParameter"));
console.log(newObj.hasOwnProperty("evenNewerFunction"));
console.log(newObj.hasOwnProperty("parameter"));
console.dir(newObj);

Obj2 = new Obj("new object 2");
console.dir(Obj2);

let obj = {
  prop: "this is a prop",
};

console.log(obj.hasOwnProperty("prop"));
console.log(obj.hasOwnProperty("toString"));
console.log(obj.toString());

console.log("regex");
let items = "Items: MBT-6745 MBT-572";
console.log(items.match(/(MBT-)(\d{1,4})/g));
console.log(items.match(/(MBT-)(\d{1,4})/));

let dateFormat = /^[01]?\d\/[0-3]\d\/(19|20)\d{2}$/;
console.log(dateFormat.test("02/32/1938"));
console.log(dateFormat.test("1/23/1938"));

console.log("Error Object");
// let calculateFutureValue = function(investment, annualRate, years){
//   if(investment <= 0 || annualRate <= 0 || years<= 0){
//     throw new RangeError("Please Check your entries for validity.");
//   }
// }

// calculateFutureValue(0, 0, 0);

//nodevalue
let node = document.getElementById("test");
node.innerHTML = "Hello World";
node.firstChild.nodeValue = "Bye Worid"

// try{
//   calculateFutureValue();
// }catch(error){
//   alert(`Error message = ${error.message}\nError name = ${error.name}`);
// }