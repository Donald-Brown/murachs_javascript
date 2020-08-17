let $ = function (id) {
  return document.getElementById(id);
};

let getRandomNumber = function (max) {
  return Math.floor(Math.random() * max) + 1;
};

let averageRolls = function(){
  let total = 0;
  let count = 10000;
  let max = -Infinity;
  let rolls;

  for(let i = 1; i < count; i++){
      rolls = 0;
    do{
      rolls++;
    }
    while(getRandomNumber(6) !== 6)
    total += rolls;
    if(rolls > max){
      max = rolls;
    }
  }

  // while(count < 10000){
  //   rolls = 1;
  //   while(getRandomNumber(6) !== 6){
  //     rolls++;
  //   }
  //   total += rolls;
  //   count++;
  //   if(rolls > max){
  //     max = rolls;
  //   }
  // }
  let average = total / count;
  alert('Average rolls: ' + average.toFixed(0) + '\n\nMax rolls: ' + max);
}

let determineIfPrime = function () {
  let number = $("number").value;
  // let prime = true;
  // let message;

  // for (let i = 2; i < number; i++) {
  //   if (number % i === 0) {
  //     prime = false;
  //   }
  // }
  // if (prime) {
  //   message = number + " is prime";
  // } else {
  //   message = number + " is not prime";
  // }
  $('primes').innerHTML = isPrime(number);
};

let isPrime = function(number){
  let prime = true;
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      prime = false;
      break;
    }
  }
  return prime;
}

let getPrimeNumbers = function(){
  let number = $('number').value;
  let string = '';
  let count = 0;
  for(let i = 2; i < number; i++){
    if(isPrime(i)){
      string = string + i + ', ';
      count++;
    }
  }
  $('count').value = count;
  $('primes').value = string.substring(0, string.length - 2);
}

let displayFactors = function () {
  let number = $("number").value;
  let factors = "";
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      factors += i + " ";
    }
  }
  alert("Factors of ".concat(number, ": ", factors));
};

let processData = function () {
  // averageRolls();
  // displayFactors();
  determineIfPrime();
};

window.onload = function () {
  $("calculate").onclick = getPrimeNumbers;
  $("number").focus();
};
