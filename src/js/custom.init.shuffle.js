$(function() {

  var win           = $(window),
      shuffleGrid   = $('.shuffle-grid'),
      shuffleFilter = $('.shuffle-filter');


  win.load(function() {

    shuffleGrid.shuffle({ // Shuffle.js Initialization
      itemSelector: '.shuffle-item',
      speed       : 400
    });

    shuffleFilter.each(function() { // Shuffle.js Filter

      var el        = $(this),
          shuffleID = el.data('shuffle'); // Get ID of a needed grid

      el.find('a').on('click', function(e) {

        e.preventDefault(); // Disable default event

        // Remove 'is-active' classes and add one to a needed element
        $(shuffleFilter).find('a').removeClass('is-active');
        $(this).addClass('is-active');

        // Shuffle the needed grid
        $('#' + shuffleID).shuffle('shuffle', $(this).data('group'));

      });
      
    });

  });

});