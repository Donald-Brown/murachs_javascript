'use strict';

(function($) {
  $.fn.highlightMenu = function() {
    return this.each(function() {
      let items = $(this).find('a');
      console.log(items);
      items.mouseover(function() {
        $(this).addClass('mouseover');
      });
      items.mouseout(function() {
        $(this).removeClass('mouseover');
      });
    });
  };
} )(jQuery);

// let items = $.find('a');
// console.log(items);
// $(items).addClass('green');