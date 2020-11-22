'use strict';

$(document).ready(function() {
  $('#join_list').click(function() {
    let emailAddress1 = $('#email_address1').val();
    let emailAddress2 = $('#email_address2').val();
    let isValid = true;

    //* validate email 1
    if (emailAddress1 === '') {
      $('#email_address1').next().text(' This field is required.');
      isValid = false;
    } else {
      $('#email_address1').next().text('');
    }

    //* validate email 2
    if (emailAddress2 === '') {
      $('#email_address2').next().text(' This field is requeired.');
      isValid = false;
    } else if (emailAddress2 !== emailAddress1) { 
      $('#email_address2').next().text(' Address must match');
      isValid = false; 
    } else {
      $('#email_address2').next().text('');
    }

    //* validate first name entry
    if ($('#first_name').val() === '') {
      $('#first_name').next().text(' Required field');
      isValid = false;
    } else {
      $('#first_name').next().text('');
    }

    //* submit form if all entries are valid
    if (isValid) {
      $('#email_form').submit();
    }
  }); //? end click
}); //? end ready