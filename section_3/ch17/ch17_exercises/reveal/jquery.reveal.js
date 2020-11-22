'use strict';

(function($) {
  $.fn.reveal = function() {
    return this.each(function() {
      //* set up click handler for events
      $(this).click(function(e) {
        $(this).toggleClass('minus');
        if ($(this).attr('class') !== 'minus') {
          $(this).next().hide();
        } else {
          $(this).next().show();
        }
        e.preventDefault();
      }); //? end click events
    });
  };
})(jQuery);