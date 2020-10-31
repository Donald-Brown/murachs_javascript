//? Calculate factorial using a for loop
let calculateFactorialLoop = function(num){
  let result = 1;
  for(let i = 1; i <= num; i++){
    result = result * i;
  }
  return result;
}
console.log(calculateFactorialLoop(5));

//? Calculate factorial using a recursive function
let calculateFactorialRecursive = function(num){
  if(num <= 0){
    return 1;
  }else{
    return num * calculateFactorialRecursive(num - 1);
  }
}
console.log(calculateFactorialRecursive(4));
let calcF = calculateFactorialRecursive;
// console.log(clacF(3)); //error

//? renaming using a named function expression
let calculateFactorialRename = function factorial(num){
  if(num <= 1){
    return 1;
  }else{
    return num * factorial(num - 1);
  }
}
let calculate = calculateFactorialRename;
console.log(calculateFactorialRename(5));
console.log(calculate(4));