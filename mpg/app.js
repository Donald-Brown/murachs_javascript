let $ = function(id){
  return document.getElementById(id);
}

let calculateMpg = function(gallons, miles){
  return (miles / gallons).toFixed(1);
}

let processInput = function(){
  let miles = parseFloat($('miles').value);
  let gallons = parseFloat($('gallons').value);
  if(isNaN(miles) || isNaN(gallons)){
    alert('Both inputs must be real numbers');
  }else{
    let mpg = calculateMpg(gallons, miles);
    $('mpg').value = mpg;
  }
}

window.onload = function(){
  $('calculate_mpg').onclick = processInput;
  $('miles').focus(); 
}