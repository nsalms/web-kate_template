$(function() {

  var win       = $(window),
      preloader = $('.loader-wrap');

  // Show preloader if JS turned on
  preloader.removeClass('none');

  // Hide preloader after 'load' event
  win.load(function() { preloader.fadeOut(300); });

});