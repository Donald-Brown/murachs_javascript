'use strict';

(function($) {
  $.fn.highlightMenu = function(options) {

    let defaults = {
      'mouseoverClass' : 'mouseover',
      'mouseoutClass' : 'mouseout',
      'useMouseOut' : true
    }

    let o = $.extend( {}, defaults, options);

    return this.each(function() {
      let items = $(this).find('a');
      console.log(items);
      items.mouseover(function() {
        $(this).addClass(o.mouseoverClass);
        if (o.useMouseOut) {
          $(this).removeClass(o.mouseoutClass);
        }
      });
      items.mouseout(function() {
        $(this).removeClass(o.mouseoverClass);
        if (o.useMouseOut) {
          $(this).addClass(o.mouseoutClass);
        }
      });
    });
  };
} )(jQuery);

// let items = $.find('a');
// console.log(items);
// $(items).addClass('green');