$(function() {

  var win = $(window);

  if(!Modernizr.csstransitions) return;


  win.load(function() {

    // Attach 'inview' event
    $('.progress').on('inview', function() {

      var el    = $(this),
          width = el.data('progress-width'); // Get options of width for each element

      // Set the width
      el.find('> .progress-bar')
        .css({width: width})
        .html('<span>' + width + '</span>');

    });

  });

});