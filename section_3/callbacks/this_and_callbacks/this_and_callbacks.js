let getTaxableAmountTracker = function(){
  return document.getElementById('tracker');
}


let calculateSalesTax = function(amount, taxRate, getTaxableAmount){
  //let tracker = getTaxableAmountTracker();
  //console.log(tracker);
  if(getTaxableAmount && typeof getTaxableAmount === 'function'){
    taxable = getTaxableAmount(amount);
  }
  let tax = taxable * taxRate;
  console.log(tax)
  let message =  (isNaN(tax)) ? 'Invalid calculation.' : tax;
  document.getElementById('span2').innerHTML = message;
}

let exemptFood = function(amount){
  if(Array.isArray(amount)){
    total = 0;
    for(let i in amount){
      let item = (amount[i].type === "food") ? 0 : amount[i].total;
      total = total + item;
    }
  }
  //? display total in span tag
  console.log(this.tagName)
  if(this !== undefined && this.tagName && this.tagName === 'SPAN'){
    this.firstChild.nodeValue = total;
  }
  return total;
}

let items = [
  {type: "food", total: 35.00},
  {type: "clothing", total: 35.00},
  {type: "pet supplies", total: 45.00}
];

window.onload = function(){
  let span = document.getElementById('tracker');
  document.getElementById('items').onclick = function(){
    calculateSalesTax(items, 0.08, exemptFood.bind(span));
  }
}