$(function() {

  var win = $(window),
      map = $('#google-map');


  win.load(function() {

    $("[data-type]").one('inview', function() {

      var el = $(this);

      // Vertical align fix & Typed.js plugin Initialization
      el.css({'vertical-align': 'middle'}).typed({
        strings   : [el.data('type')],
        startDelay: 1000,
        typeSpeed : 150,
        backSpeed : 50
      });

    });

  });



  // Smooth Scroll plugin Initialization
  $('a').smoothScroll({
    speed : 1000,
    easing: 'easeInOutExpo'
  });



  // Owl Carousel 2 plugin Initialization
  $('#carousel-01').owlCarousel({ // Favorite customers slider
    items        : 3,
    autoplay     : true,
    autoplaySpeed: 1000,
    dots         : true,

    responsive: {
      0  : { items: 1 },
      480: { items: 2 },
      768: { items: 4 }
    }
  });

  $('#carousel-02').owlCarousel({ // Reviews slider
    items        : 1,
    autoplay     : true,
    autoplaySpeed: 1000,
    dots         : true
  });



  // MagnificPopup plugin Initialization
  $('.mfp-popup-link').magnificPopup({
    closeMarkup : '<img src="img/icon-close.svg" class="mfp-close" title="%title%" alt="close">',
    type        : 'inline',
    midClick    : true,
    removalDelay: 300,
    mainClass   : 'mfp-zoomIn'
  });


  if (map.length) {
    
    // Map style from https://snazzymaps.com/
    var mapStyle = {'Ultra Light': [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]};
        
    // List of locations being marked on the map
    var mapLocations = [{
      lat : '51.5092719',
      lon : '-0.1282749',
      zoom: 15,
      icon: 'img/map-marker.png'
    }];

    // Map options as defined by Google
    var mapOptions = {
      mapTypeControl   : false,
      streetViewControl: false,
      scrollwheel      : false
    };

    // Maplace plugin Initialization
    new Maplace({
      map_div    : map,
      locations  : mapLocations,
      styles     : mapStyle,
      map_options: mapOptions,
    }).Load();
  }

});
