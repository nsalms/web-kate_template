$(function() {

  var win = $(window);

  // Set window height to '.height-viewport' element
  win.on('resize', function() { $('.height-viewport').css({'height': win.height()}); });

  // Trigger window.resize when 'html' is resizing
  $('html').resize(function() { win.trigger('resize') });


  // Initial triggers
  win.trigger('resize');
  win.trigger('scroll');

});