let $ = function(id){
  return document.getElementById(id);
}

let calculateMpg = function(gallons, miles){
  return (miles / gallons).toFixed(1);
}

let processInput = function(){
  let miles = $('miles').value;
  let gallons = $('gallons').value;
  let isValid = true;
  // validate miles
  if(isNaN(miles)){
    $('miles_error').firstChild.nodeValue = 'Miles must be a number';
    isValid = false;
  }else if(miles <= 0){
    $('miles_error').firstChild.nodeValue = 'Miles must be greater than zero';
    isValid = false;
  }
  // validate gallons
  if(isNaN(gallons)){
    $('gallons_error').firstChild.nodeValue = 'Gallons must be a number';
    isValid = false;
  }else if(gallons <= 0){
    $('gallons_error').firstChild.nodeValue = 'Gallons must be greater than zero';
    isValid = false;
  }
  if(isValid){
    let mpg = calculateMpg(gallons, miles);
    $('mpg').value = mpg;
  }
}

let clearEntries = function(){
  $('miles').value = '';
  $('gallons').value = '';
  $('miles_error').firstChild.nodeValue = '*';
  $('gallons_error').firstChild.nodeValue = '*';
  $('mpg').value = '';
  $('miles').focus();
}

window.onload = function(){
  $('calculate_mpg').onclick = processInput;
  $('clear_entries').onclick = clearEntries;
  $('miles').ondblclick = clearEntries;
  $('miles').focus(); 
}