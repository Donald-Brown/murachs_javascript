let $ = function(id){
  return document.getElementById(id);
}

// event handler for the click event of each h2 element 
let toggle = function(){
  let a = this; // this refers to the h2 being clicked
  h2 = a.parentNode;
  let div = h2.nextElementSibling; // div = this h2's sibling div

  // toggle plus and minus image by removing or adding class
  // if(h2.hasAttribute('class')){
  //   h2.removeAttribute('class');
  // }else{
  //   h2.setAttribute('class', 'minus');
  // }
  if(h2.hasAttribute('class')){
    h2.className = '';
  }else{
    h2.className = 'minus';
  }

  // toggle div visibility
  // if(div.hasAttribute('class')){
  //   div.removeAttribute('class');
  // }else{
  //   div.setAttribute('class', 'open');
  // }
  if(div.hasAttribute('class')){
    div.className = '';
  }else{
    div.className = 'open';
  }
}

window.onload = function(){
  // get the h2 tags
  let faqs = $('faqs');
  
  let aElements = faqs.getElementsByTagName('a');

  
  // attach event handler to each tag
  for(let i = 0; i < aElements.length; i++){
    aElements[i].onclick = toggle;
  }

  // set focus on first <a></a>
  aElements[0].focus();
}