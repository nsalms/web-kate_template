$(function() {

  var win = $(window);

  if(!Modernizr.csstransitions) return;


  win.load(function() {

    $('[data-animate]').each(function() {

      var options     = $(this).data("animate"), // Get options of each element in JSON
          targetMask  = $(this).find(options.target),
          target      = targetMask.length ? targetMask : this, // If a element has no target then apply to itself
          animInitCls = 'hidden', // Initial class of animation elements (it will be removed before animation)
          totalDelay  = 0;

      // Add the initial class & attach 'inview' event for each target
      $(target).addClass(animInitCls).one('inview', function() {

        var el = $(this);

        totalDelay += parseInt(options.delay || 0); // If a element has no delay then it is 0s.

        // Remove the initial class & add animation classes after delay
        setTimeout(function() { el.addClass(options.cls).removeClass(animInitCls) }, totalDelay);

      });

    });

  });

});