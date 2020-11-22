'use strict';

(function($) {
  $.fn.highlightMenu = function(options) {
    let defaults = {
      'mouseoverClass' : 'mouseover',
      'mouseoutClass' : 'mouseout',
      'useMouseOut' : true
    }

    let ln = $.extend( {}, defaults, options );

    return this.each(function() {
      let items = $(this).find('a');
      items.mouseover(function() {
        $(this).addClass(ln.mouseoverClass);
        if (ln.useMouseOut) {
          $(this).removeClass(ln.mouseoutClass);
        }
      } );
      items.mouseout(function() {
        $(this).removeClass(ln.mouseoverClass);
        if (ln.useMouseOut) {
          $(this).addClass(ln.mouseoutClass);
        }
      });
    });
  };
})(jQuery);