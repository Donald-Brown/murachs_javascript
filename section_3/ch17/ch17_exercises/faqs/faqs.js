$(document).ready(function() {
  $('#faqs h2').click(function(e) {
    $(this).toggleClass('minus');
    //? check if clicked panel should be open
    let open = ( $(this).attr('class') === 'minus');

    //? close all panels
    $('#faqs h2').removeClass('minus').next().hide();

    //? show panel if open
    if (open) {
      $(this).addClass('minus').next().show();
    }

    e.preventDefault();
  } ); //* end click

  //? set focus and open first panel
  $('#faqs a:first').focus();
  $('#faqs h2:first').addClass('minus').next().show();
} ); //* end ready