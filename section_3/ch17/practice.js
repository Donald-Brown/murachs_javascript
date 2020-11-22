$('h2').next().text(' I\'m injected by jQuery'); //? next is next sibling, text is text value

$(document).ready(function() {
  $('h2').click(function() {
    alert('Heading was clicked');
  });

  $('#faqs a').click(function(e) {
    e.preventDefault();
  });
});