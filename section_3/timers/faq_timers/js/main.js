"use strict";

let $ = function(id){
  return document.getElementById(id);
}

let toggle = function(){
  let h2 = this;                   //* clicked h2 tag
  let div = h2.nextElementSibling; //* h2 tags sibling div

  //? togge plus and minus image
  if(h2.hasAttribute('class')){
    h2.removeAttribute('class');
  }else{
    h2.setAttribute('class', 'open');
  }

  //? toggle div visability
  if(div.hasAttribute('class')){
    div.removeAttribute('class');
  }else{
    div.setAttribute('class', 'open');
  }
}

let log = function(e){
  console.log(e);
}

let oneTimeTimer;

//? function that starts the upgrade
let startUpgrade = function(){
  $('message').firstChild.nodeValue = 'Download starting...';
}

//? function that cancels the one-time timer
let cancelUpgrade = function(){
  clearTimeout(oneTimeTimer);
  $('upgrade').setAttribute('class', 'closed');
}

let intervalTimer;
let counter = 0;

//? function that updates the counter
let updateCounter = function(){
  counter++;
  $('counter').firstChild.nodeValue = counter;
}

window.onload = function(){
  oneTimeTimer = setTimeout(startUpgrade ,5000);
  $('cancel').onclick = cancelUpgrade;

  intervalTimer = setInterval(updateCounter, 1000);

  //? get h2 tags 
  let faqs = $('faqs');
  let elements = faqs.getElementsByTagName('h2');

  //? attach event handlers
  for(let i = 0; i < elements.length; i++){
    let h2 = elements[i]; //* h2 tag
    let a = h2.firstChild; //* h2 tags child <a> tag
    //? attach click event
    evt.attach(h2, 'click', toggle);
    //? cancel default action of the <a> tag
    evt.attach(a, 'click', evt.preventDefault);
    //? log the various events of the a tag
    evt.attach(a, 'click', log);
    evt.attach(a, 'focus', log);
    evt.attach(a, 'mouseover', log);
  }

  //? set focus on the first h2's a tag
  elements[0].firstChild.focus();
}