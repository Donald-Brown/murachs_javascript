//* JSON string to parse
let jsonStr = "{\"name\":{\"f\":\"grace\",\"l\":\"hopper\"},\"start\":\"2000-01-01T08:00:00.000z\"}";

console.log(JSON.parse(jsonStr));

let reviver = function(key, value) {
  if (key === '') {
    return value;
  }
  let date = new Date(value);
  return (date.toString() === 'Invalid Date') ? value : date;
}

console.log(JSON.parse(jsonStr, reviver));

//* add an additional property to the date object
let reviver2 = function(key, value) {
  if (key === '') {
    return value;
  }
  let date = new Date(value);
  if(date.toString() === 'Invalid Date'){
    return value;
  } else {
    let m = date.getMonth() + 1;
    date.short = m + "/" + date.getDate() + '/' + date.getFullYear();
    return date;
  }
}

let obj = JSON.parse(jsonStr, reviver2);
console.log(obj.start.short);

//* convert name object to a string
let reviver3 = function(key, value) {
  return (key === "name") ? value.l + ', ' + value.f : value;
}

let obj2 = JSON.parse(jsonStr, reviver3);
console.log(obj2);