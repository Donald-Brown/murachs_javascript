let $ = function(id){
  return document.getElementById(id);
}

let calculateDays = function(){
  let event = $('event').value;
  let date = $('date').value;
  let message = $('message');

  // check to see if event and date are entered
  if(event.length === 0 || date.length === 0){
    message.nodeValue = 'Please enter both a name and a date.';
    return;
  }

  //verify format of date
  if(date.indexOf('/') === -1){
    message.nodeValue = 'Please enter the date in mm/dd/yyyy format.';
    return;
  }

  let year = date.substring(date.length - 4);
  if(isNaN(year)){
    message.nodeValue = 'Please enter the date in mm/dd/yyyy format.';
  }

  // convert and validate date string
  let dueDate = new Date(date);
  if(dueDate === 'Invalid Date'){
    message.nodeValue = 'Please enter ther date in mm/dd/yyyy format.';
  }

  // Calculate days until due
  let today = new Date();
  let oneDay = 24*60*60*1000; //hours * minutes * seconds * miliseconds
  let days = Math.ceil((dueDate.getTime() - today.getTime()) / oneDay);

  // create and display message
  if(days === 0){
    message.innerHTML = `<p>hooray! Today is ${event.toLowerCase()} !</p><p>(${dueDate.toDateString()})</p> `;
  }

  if(days < 0){
    event = event.substring(0,1).toUpperCase() + event.substring(1);
    // message.nodeValue = event.concat(' happend ', Math.abs(days), ' day(s) ago. \n(', dueDate.toDateString(), ')');
    message.innerHTML = `<p>${event} happened ${Math.abs(days)} day(s) ago.</p> <p>(${dueDate.toDateString()})</p>`;
  }

  if(days > 0){
    // message.nodeValue = days.toString().concat(' day(s) until ', event.toLowerCase(), '!(', dueDate.toDateString(), ')');
    message.innerHTML = `<p>${days.toString()} day(s) until ${event.toLowerCase()}!</p><p>(${dueDate.toDateString()})</p>`;
  }
}

window.onload = function(){
  $('countdown').onclick = calculateDays;
  $('event').focus();
}

