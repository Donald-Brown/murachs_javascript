$(document).ready(function() {
  $('#faqs h2').click(function(e) {
    $(this).toggleClass('minus');
    if ($(this).attr('class') !== 'minus') {
      $(this).next().hide();
    } else {
      $(this).next().show();
    }
    e.preventDefault();
  });
  $('#faqs a:first').focus();
})