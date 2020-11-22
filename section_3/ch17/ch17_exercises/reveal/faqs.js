$(document).ready(function() {
  //* set up click handler for h2 events
  $('#faqs h2').click(function(e) {
    $(this).toggleClass('minus');
    if ($(this).attr('class') !== 'minus') {
      $(this).next().hide();
    } else {
      $(this).next().show();
    }
    e.preventDefault();
  }); //? end click events
  $('#faqs a:first').focus();
}); //? end ready