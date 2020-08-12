let $ = function(id){
  return document.getElementById(id);
}

// event handler for the click event of each h2 element 
let toggle = function(){
  let h2 = this; // this refers to the h2 being clicked
  let div = h2.nextElementSibling; // div = this h2's sibling div

  // toggle plus and minus image by removing or adding class
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

window.onload = function(){
  // get the h2 tags
  let faqs = $('faqs');
  
  let h2Elements = faqs.getElementsByTagName('h2');

  
  // attach event handler to each tag
  for(let i = 0; i < h2Elements.length; i++){
    h2Elements[i].onclick = toggle;
  }

  // set focus on first <a></a>
  h2Elements[0].firstChild.focus();
}