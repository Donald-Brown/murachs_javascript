//? Utility function that accepts a callback
let calculateTaxRate = function(amount, taxRate, getTaxableAmount){
  let taxable = amount; //* set default taxable to amount
  //? check to see if callback exists and is a function
  if(getTaxableAmount && typeof getTaxableAmount === "function"){
    taxable = getTaxableAmount(amount);
  }
  //? calculate and return tax
  let tax = taxable * taxRate;
  return (isNaN(tax)) ? "Invalid Calculation." : tax;
}

//? code using the utility without callback
console.log(calculateTaxRate(100, 0.08));

//? code that uses the utility with a callback
let discount = function(amount){
  return amount * .90; //* 10 percent discount amount
}

console.log(calculateTaxRate(100, 0.08, discount));

//? An app using the utility with a different callback
let exemptFood = function(amount){
  let total = amount;    //* set default amount to total
  if(Array.isArray(amount)){
    total = 0;
    for(let i in amount){
      let item = (amount[i].type === "food") ? 0 : amount[i].total;
      total = total + item;
    }
  }
  return total;
}

let items = [
  {type: "food", total: 35.00},
  {type: "clothing", total: 35.00},
  {type: "pet supplies", total: 45.00}
]

//? code using the utiliy and callback with a numeric first argument
console.log(calculateTaxRate(100, 0.08, exemptFood));
//? code using the utility and callback with an array as the first argument
console.log(calculateTaxRate(items, 0.08, exemptFood));