let item = [];
item['itemCode'] = 123;
item['itemName'] = 'HTML5';
item['itemCost'] = 54.5;
item['itemQuantity'] = 5;

console.log(item);
document.getElementById('output').innerHTML = `${item['itemCode']}`;