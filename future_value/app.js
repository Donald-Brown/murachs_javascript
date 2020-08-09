let $ = function(id){
  return document.getElementById(id);
}

let calculateFutureValue = function(investment, interestRate, years){
  let futureValue = investment;
  for(let i = 1; i <= years; i++){
    futureValue += futureValue * interestRate/100;
  }

  return futureValue.toFixed(2);
}

let processData = function(){
  let investment = parseFloat($('total_investment').value);
  let interestRate = parseFloat($('interest_rate').value);
  let years = parseFloat($('years').value);
  let isValid = true;
  // validate investment
  if(isNaN(investment) || investment <= 0 || investment > 1e5){
    $('total_investment_error').firstChild.nodeValue = 'Must be > 0 and <= 100000';
    isValid = false;
  }
  // validate interest rate
  if(isNaN(interestRate) || interestRate <= 0 || interestRate > 15){
    $('interest_rate_error').firstChild.nodeValue = 'Must be > 0 and <= 15';
    isValid = false;
  }
  // validate years
  if(isNaN(years) || years <= 0 || years > 50){
    $('years_error').firstChild.nodeValue = `Must be > 0 and <= 50`;
    isValid = false;
  }

  if(isValid){
    let futureValue = calculateFutureValue(investment, interestRate, years)
    $('value').value = futureValue;
  }
}

window.onload = function(){
  $('calculate').onclick = processData;
  $('total_investment').focus();
}


// (function() {
//   let moreCalculations = "y";
//   let futureValue;
//   let interestRate;

//   do {
//     let investmentAmount = 10000;
//     let years;

//     do {
//       investmentAmount = parseFloat(
//         prompt("Enter a investment amount as xxxxx.xx", investmentAmount)
//       );
//       if (isNaN(investmentAmount)) {
//         alert("Please enter a number");
//       }
//     } while (isNaN(investmentAmount));

//     do {
//       interestRate = parseFloat(prompt("Enter an interest rate as xx.x", 10));
//       if (interestRate <= 0 || interestRate > 15 || isNaN(interestRate)) {
//         alert("enter a value greater than 0 and less than 15");
//       }
//     } while (interestRate <= 0 || interestRate > 15 || isNaN(interestRate));

//     do {
//       years = parseInt(prompt("Enter number of years", 7));
//       if(years <= 0 || isNaN(years)){
//         alert("Please enter a number greater than zero")
//       }
//     } while(years <= 0 || isNaN(years));

//     futureValue = investmentAmount;
//     document.write(`Invesment Amount = ${investmentAmount} Interest Rate = ${interestRate} Years = ${years}<br>`);
//     for(let i = 1; i <= years; i++){
//       let yearlyInterest = futureValue*interestRate/100;
//       futureValue += yearlyInterest;
//       document.write(`year= ${i} interest= ${yearlyInterest} value= ${parseFloat(futureValue).toFixed(2)}<br>`); 
//     }

//     document.write('<br>')

//     moreCalculations = prompt(
//       "Would you like to calculate another investment? (y/n)"
//     );
//   } while (moreCalculations == "y");
// })();

