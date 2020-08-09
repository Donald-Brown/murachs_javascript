let $ = function(id){
  return document.getElementById(id);
};

let joinList = function() {
  let emailAddress1 = $('email_address1').value;
  let emailAddress2 = $('email_address2').value;
  let isValid = true;
  let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailAddress1.match(format)){
    $('email_address1_error').firstChild.nodeValue = 'A valid email address is required';
    isValid = false;
  }else{
    $('email_address1_error').innerHTML = '';
  }

  if (!emailAddress2.match(format)){
    $('email_address2_error').firstChild.nodeValue = 'A valid email address is required.';
    isValid = false;
  }else if(emailAddress2.toLowerCase() !== emailAddress1.toLowerCase()){
    $('email_address2_error').firstChild.nodeValue = 'Entry must equal the previous entry.';
    isValid = false;
  }else{
    $('email_address2_error').firstChild.nodeValue = '';
  }

  if ($('first_name').value === ''){
    $('first_name_error').firstChild.nodeValue = 'This field is required';
    isValid = false;
  }else{
    $('first_name_error').firstChild.nodeValue = '';
  }

  if (isValid) {
    // Submit if all emtries are valid
    $('email_form').submit();
  }

};

window.onload = function(){
  $('join_list').onclick = joinList;
  $('email_address1').focus();
};
  