'use strict';

$(document).ready(function() {
  $('nav').highlightMenu( {
    useMouseOut: true,
    mouseoverClass: 'mouseover_changes',
    mouseoutClass: 'mouseout_changes'
  });
}); //? end ready