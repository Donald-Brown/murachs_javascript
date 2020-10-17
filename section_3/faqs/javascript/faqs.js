"use strict";

let $ = function(id){
  return document.getElementById(id);
}

let toggle = function(){
  let h2 = this;                   // clicked h2 tag 
  let div = h2.nextElementSibling; // h2's sibling div tag

  // toggle plus/minus image
  if(h2.hasAttribute('class')){
    h2.removeAttribute('class');
  }else{
    h2.setAttribute('class', 'minus');
  }

  // toggle div visibility
  if(div.hasAttribute('class')){
    div.removeAttribute('class');
  }else{
    div.setAttribute('class', 'open');
  }
}

let log = function(e){
  console.log(e);
}

window.onload = function(){
  // get h2 tags
  let faqs = $('faqs');
  let elements = faqs.getElementsByTagName('h2');

  // attach event handlers
  for(let i = 0; i < elements.length; i++){
    let h2 = elements[i]; // h2 tag
    let a = h2.firstChild; // h2's child <a>

    // attach h2 click event 
    evt.attach(h2, 'click', toggle);

    //cancedl the default action of the <a> tag
    evt.attach(a, 'click', evt.preventDefault);

    //log the various events of the <a> tag
    evt.attach(a, 'click', log);
    evt.attach(a, 'focus', log);
    evt.attach(a, 'mouseover', log);
  }

  elements[0].firstChild.focus();
}