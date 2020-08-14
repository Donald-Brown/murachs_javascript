var $ = function(id) {
    return document.getElementById(id);
}

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});
// EX  formatter.format(number); $2,566,436.00
let num = '2353.00';
let formatNum = function(num){
  let numArr = num.split('');
  if(numArr.length > 6){
    numArr.splice(-6, 0, ',');
  }
  if(numArr.length > 10){
    numArr.splice(-10, 0, ',');
  }
  numArr.unshift('$');
  return numArr.join('');
}

var calculateFV = function(investment,rate,years) {
	var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
      futureValue += futureValue * rate / 100;
      if(futureValue === Infinity){
        alert('Future value = Infinity\ni = ' + i);
        i = years;
      }
    }
    if(futureValue === Infinity){
      alert('the maximum JavaScript number is: ' + Number.MAX_VALUE)
    }
    futureValue = futureValue.toFixed(2);
	return futureValue;
}

var processEntries = function() {
  // var investment = parseFloat( $("investment").value );
  // var rate = parseFloat( $("annual_rate").value );
  // var years = parseInt( $("years").value );
  let investment = getRandomNumber(50000);
  $('investment').value = investment;
  let rate = getRandomNumber(15);
  $('annual_rate').value = rate;
  let years = getRandomNumber(50);
  $('years').value = years;

	if (isNaN(investment) || investment <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(years) || years <= 0) {
		alert("Must be > 0");
		allValid = false;
	}
	else {
		$("future_value").value	= formatNum(calculateFV(investment,rate,years));
	}
}

let getDateTime = function(){
  let now = new Date();
  let minutes = now.getMinutes();
  if(minutes < 10){
    minutes = '0' + minutes;
  }
  return `Today is ${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} at ${now.getHours()}:${minutes}.`;
}

//console.log(getDateTime());

window.onload = function() {
    $("calculate").onclick = processEntries;
    $('date').innerHTML = getDateTime();
    $("investment").focus();
}