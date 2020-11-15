let employee = {
  name: {f: 'grace', l: 'hopper'},
  start: new Date('1/1/2000'),
  salary: 30000
};

let regions = ['northwest', 'southwest', 'central', 'east'];

//* Capitalize strings and don't return salary info
let replacer = function(key, value) {
  if (key === '') {
    return value;
  }
  if (key === 'salary') {
    return undefined;
  }
  if (typeof value === 'string') {
    let first = value.substring(0,1).toUpperCase();
    let remaining = value.substring(1);
    return first + remaining;
  } else {
    return value;
  }
}

console.log(JSON.stringify(employee, replacer));
console.log(JSON.stringify(employee, null, 2))
console.log(JSON.stringify(employee, replacer, 4));
console.log(JSON.stringify(employee, null, 10));//* 10 is the max

console.log(JSON.stringify(employee, replacer, '  '));

