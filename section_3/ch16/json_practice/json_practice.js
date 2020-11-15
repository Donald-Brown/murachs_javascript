//* an object representing JSON
let employee = {
  "id": 1001,
  "startDate": "01/23/96",
  "endDate": null,
  "isActive": true,
  "reviewScores": [83,86,75,93],
  "region": {
    "name": "Northern",
    "joined": "05/13/99"
  },
  "monthlySales": [
    {
      "productId": "CS101",
      "quantity": 2
    },
    {
      "productId": "NG202",
      "quantity": 5,
      "returns": 1
    }
  ]
}

console.log(employee.id);
console.log(employee["region"]["name"]);
console.log(employee.monthlySales.length);

console.log(employee);
console.log(JSON.stringify(employee));
console.log(JSON.parse(JSON.stringify(employee)));

let tasks = [];
let date = new Date();
tasks.push({t: 'Taxes', d: date, test: function(){alert('Hello World');}});
tasks.push({t: 'Laundry', d: undefined});
tasks.push(undefined);
tasks.push(function(){alert('Hello');});
console.log(tasks);
console.log(JSON.stringify(tasks));
console.log(JSON.parse(JSON.stringify(tasks)));

let parsedJson = JSON.parse(JSON.stringify(tasks));
console.log(parsedJson[0].d);
//? must manually convert to date object
let parsedDate = new Date(parsedJson[0].d);
console.log(parsedDate);

