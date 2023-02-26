/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransforms-csstransforms3d-csstransitions-cssvhunit-cssvwunit-domprefixes-prefixed-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,i,o,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],t=C[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function i(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?x.className.baseVal=t:x.className=t)}function o(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function a(e,t){return!!~(""+e).indexOf(t)}function f(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(){var e=t.body;return e||(e=f(_?"svg":"body"),e.fake=!0),e}function l(e,n,r,s){var i,o,a,l,d="modernizr",p=f("div"),c=u();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=s?s[r]:d+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+d,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),o=n(p,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=l,x.offsetHeight):p.parentNode.removeChild(p),!!o}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var s;for(var i in e)if(e[i]in t)return n===!1?e[i]:(s=t[e[i]],r(s,"function")?d(s,n||t):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+c(t[s])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,s,i){function u(){d&&(delete j.style,delete j.modElem)}if(i=r(i,"undefined")?!1:i,!r(s,"undefined")){var l=m(e,s);if(!r(l,"undefined"))return l}for(var d,p,c,h,v,g=["modernizr","tspan"];!j.style;)d=!0,j.modElem=f(g.shift()),j.style=j.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],v=j.style[h],a(h,"-")&&(h=o(h)),j.style[h]!==n){if(i||r(s,"undefined"))return u(),"pfx"==t?h:!0;try{j.style[h]=s}catch(y){}if(j.style[h]!=v)return u(),"pfx"==t?h:!0}return u(),!1}function v(e,t,n,s,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?h(a,t,s,i):(a=(e+" "+z.join(o+" ")+o).split(" "),p(a,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C=[],S={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var w=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=w;var x=t.documentElement,_="svg"===x.nodeName.toLowerCase(),b="Moz O ms Webkit",z=S._config.usePrefixes?b.toLowerCase().split(" "):[];S._domPrefixes=z;var P="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",P||T);var E=S._config.usePrefixes?b.split(" "):[];S._cssomPrefixes=E;var k=function(t){var r,s=w.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var o=0;s>o;o++){var a=w[o],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+t}return!1};S.atRule=k;var N=S.testStyles=l;N("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)}),N("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)});var A={elem:f("modernizr")};Modernizr._q.push(function(){delete A.elem});var j={style:A.elem.style};Modernizr._q.unshift(function(){delete j.style});S.testProp=function(e,t,r){return h([e],n,t,r)};S.testAllProps=v;S.prefixed=function(e,t,n){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=o(e)),t?v(e,t,n):v(e,"pfx"))};S.testAllProps=g,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",N(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",g("transition","all",!0)),s(),i(y),delete S.addTest,delete S.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
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
$(function() {

  var win       = $(window),
      preloader = $('.loader-wrap');

  // Show preloader if JS turned on
  preloader.removeClass('none');

  // Hide preloader after 'load' event
  win.load(function() { preloader.fadeOut(300); });

});
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
/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function (factory) {
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory(require('jquery'));
  } else {
      // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var inviewObjects = [], viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, timer;

  $.event.special.inview = {
    add: function(data) {
      inviewObjects.push({ data: data, $element: $(this), element: this });
      // Use setInterval in order to also make sure this captures elements within
      // "overflow:scroll" elements or elements that appeared in the dom tree due to
      // dom manipulation and reflow
      // old: $(window).scroll(checkInView);
      //
      // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
      // intervals while the user scrolls. Therefore the inview event might fire a bit late there
      //
      // Don't waste cycles with an interval until we get at least one element that
      // has bound to the inview event.
      if (!timer && inviewObjects.length) {
         timer = setInterval(checkInView, 250);
      }
    },

    remove: function(data) {
      for (var i=0; i<inviewObjects.length; i++) {
        var inviewObject = inviewObjects[i];
        if (inviewObject.element === this && inviewObject.data.guid === data.guid) {
          inviewObjects.splice(i, 1);
          break;
        }
      }

      // Clear interval when we no longer have any elements listening
      if (!inviewObjects.length) {
         clearInterval(timer);
         timer = null;
      }
    }
  };

  function getViewportSize() {
    var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };

    // if this is correct then return it. iPad has compat Mode, so will
    // go into check clientHeight/clientWidth (which has the wrong value).
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) { // IE, Gecko
        domObject = mode === 'CSS1Compat' ?
          documentElement : // Standards
          d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width:  domObject.clientWidth
        };
      }
    }

    return size;
  }

  function getViewportOffset() {
    return {
      top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
    };
  }

  function checkInView() {
    if (!inviewObjects.length) {
      return;
    }

    var i = 0, $elements = $.map(inviewObjects, function(inviewObject) {
      var selector  = inviewObject.data.selector,
          $element  = inviewObject.$element;
      return selector ? $element.find(selector) : $element;
    });

    viewportSize   = viewportSize   || getViewportSize();
    viewportOffset = viewportOffset || getViewportOffset();

    for (; i<inviewObjects.length; i++) {
      // Ignore elements that are not in the DOM tree
      if (!$.contains(documentElement, $elements[i][0])) {
        continue;
      }

      var $element      = $($elements[i]),
          elementSize   = { height: $element[0].offsetHeight, width: $element[0].offsetWidth },
          elementOffset = $element.offset(),
          inView        = $element.data('inview');

      // Don't ask me why because I haven't figured out yet:
      // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
      // Even though it sounds weird:
      // It seems that the execution of this function is interferred by the onresize/onscroll event
      // where viewportOffset and viewportSize are unset
      if (!viewportOffset || !viewportSize) {
        return;
      }

      if (elementOffset.top + elementSize.height > viewportOffset.top &&
          elementOffset.top < viewportOffset.top + viewportSize.height &&
          elementOffset.left + elementSize.width > viewportOffset.left &&
          elementOffset.left < viewportOffset.left + viewportSize.width) {
        if (!inView) {
          $element.data('inview', true).trigger('inview', [true]);
        }
      } else if (inView) {
        $element.data('inview', false).trigger('inview', [false]);
      }
    }
  }

  $(w).on("scroll resize scrollstop", function() {
    viewportSize = viewportOffset = null;
  });

  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function() {
      viewportOffset = null;
    });
  }
}));

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
;(function (factory) { 
if (typeof define === 'function' && define.amd) { 
 // AMD. Register as an anonymous module. 
 define(['jquery'], factory); 
 } else if (typeof exports === 'object') { 
 // Node/CommonJS 
 factory(require('jquery')); 
 } else { 
 // Browser globals 
 factory(window.jQuery || window.Zepto); 
 } 
 }(function($) { 

/*>>core*/
/**
 * 
 * Magnific Popup Core JS file
 * 
 */


/**
 * Private static constants
 */
var CLOSE_EVENT = 'Close',
	BEFORE_CLOSE_EVENT = 'BeforeClose',
	AFTER_CLOSE_EVENT = 'AfterClose',
	BEFORE_APPEND_EVENT = 'BeforeAppend',
	MARKUP_PARSE_EVENT = 'MarkupParse',
	OPEN_EVENT = 'Open',
	CHANGE_EVENT = 'Change',
	NS = 'mfp',
	EVENT_NS = '.' + NS,
	READY_CLASS = 'mfp-ready',
	REMOVING_CLASS = 'mfp-removing',
	PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


/**
 * Private vars 
 */
/*jshint -W079 */
var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
	MagnificPopup = function(){},
	_isJQ = !!(window.jQuery),
	_prevStatus,
	_window = $(window),
	_document,
	_prevContentType,
	_wrapClasses,
	_currPopupType;


/**
 * Private functions
 */
var _mfpOn = function(name, f) {
		mfp.ev.on(NS + name + EVENT_NS, f);
	},
	_getEl = function(className, appendTo, html, raw) {
		var el = document.createElement('div');
		el.className = 'mfp-'+className;
		if(html) {
			el.innerHTML = html;
		}
		if(!raw) {
			el = $(el);
			if(appendTo) {
				el.appendTo(appendTo);
			}
		} else if(appendTo) {
			appendTo.appendChild(el);
		}
		return el;
	},
	_mfpTrigger = function(e, data) {
		mfp.ev.triggerHandler(NS + e, data);

		if(mfp.st.callbacks) {
			// converts "mfpEventName" to "eventName" callback and triggers it if it's present
			e = e.charAt(0).toLowerCase() + e.slice(1);
			if(mfp.st.callbacks[e]) {
				mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
			}
		}
	},
	_getCloseBtn = function(type) {
		if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
			mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
			_currPopupType = type;
		}
		return mfp.currTemplate.closeBtn;
	},
	// Initialize Magnific Popup only when called at least once
	_checkInstance = function() {
		if(!$.magnificPopup.instance) {
			/*jshint -W020 */
			mfp = new MagnificPopup();
			mfp.init();
			$.magnificPopup.instance = mfp;
		}
	},
	// CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
	supportsTransitions = function() {
		var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
			v = ['ms','O','Moz','Webkit']; // 'v' for vendor

		if( s['transition'] !== undefined ) {
			return true; 
		}
			
		while( v.length ) {
			if( v.pop() + 'Transition' in s ) {
				return true;
			}
		}
				
		return false;
	};



/**
 * Public functions
 */
MagnificPopup.prototype = {

	constructor: MagnificPopup,

	/**
	 * Initializes Magnific Popup plugin. 
	 * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
	 */
	init: function() {
		var appVersion = navigator.appVersion;
		mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
		mfp.isAndroid = (/android/gi).test(appVersion);
		mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
		mfp.supportsTransition = supportsTransitions();

		// We disable fixed positioned lightbox on devices that don't handle it nicely.
		// If you know a better way of detecting this - let me know.
		mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
		_document = $(document);

		mfp.popupsCache = {};
	},

	/**
	 * Opens popup
	 * @param  data [description]
	 */
	open: function(data) {

		var i;

		if(data.isObj === false) { 
			// convert jQuery collection to array to avoid conflicts later
			mfp.items = data.items.toArray();

			mfp.index = 0;
			var items = data.items,
				item;
			for(i = 0; i < items.length; i++) {
				item = items[i];
				if(item.parsed) {
					item = item.el[0];
				}
				if(item === data.el[0]) {
					mfp.index = i;
					break;
				}
			}
		} else {
			mfp.items = $.isArray(data.items) ? data.items : [data.items];
			mfp.index = data.index || 0;
		}

		// if popup is already opened - we just update the content
		if(mfp.isOpen) {
			mfp.updateItemHTML();
			return;
		}
		
		mfp.types = []; 
		_wrapClasses = '';
		if(data.mainEl && data.mainEl.length) {
			mfp.ev = data.mainEl.eq(0);
		} else {
			mfp.ev = _document;
		}

		if(data.key) {
			if(!mfp.popupsCache[data.key]) {
				mfp.popupsCache[data.key] = {};
			}
			mfp.currTemplate = mfp.popupsCache[data.key];
		} else {
			mfp.currTemplate = {};
		}



		mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
		mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

		if(mfp.st.modal) {
			mfp.st.closeOnContentClick = false;
			mfp.st.closeOnBgClick = false;
			mfp.st.showCloseBtn = false;
			mfp.st.enableEscapeKey = false;
		}
		

		// Building markup
		// main containers are created only once
		if(!mfp.bgOverlay) {

			// Dark overlay
			mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
				mfp.close();
			});

			mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
				if(mfp._checkIfClose(e.target)) {
					mfp.close();
				}
			});

			mfp.container = _getEl('container', mfp.wrap);
		}

		mfp.contentContainer = _getEl('content');
		if(mfp.st.preloader) {
			mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
		}


		// Initializing modules
		var modules = $.magnificPopup.modules;
		for(i = 0; i < modules.length; i++) {
			var n = modules[i];
			n = n.charAt(0).toUpperCase() + n.slice(1);
			mfp['init'+n].call(mfp);
		}
		_mfpTrigger('BeforeOpen');


		if(mfp.st.showCloseBtn) {
			// Close button
			if(!mfp.st.closeBtnInside) {
				mfp.wrap.append( _getCloseBtn() );
			} else {
				_mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
					values.close_replaceWith = _getCloseBtn(item.type);
				});
				_wrapClasses += ' mfp-close-btn-in';
			}
		}

		if(mfp.st.alignTop) {
			_wrapClasses += ' mfp-align-top';
		}

	

		if(mfp.fixedContentPos) {
			mfp.wrap.css({
				overflow: mfp.st.overflowY,
				overflowX: 'hidden',
				overflowY: mfp.st.overflowY
			});
		} else {
			mfp.wrap.css({ 
				top: _window.scrollTop(),
				position: 'absolute'
			});
		}
		if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
			mfp.bgOverlay.css({
				height: _document.height(),
				position: 'absolute'
			});
		}

		

		if(mfp.st.enableEscapeKey) {
			// Close on ESC key
			_document.on('keyup' + EVENT_NS, function(e) {
				if(e.keyCode === 27) {
					mfp.close();
				}
			});
		}

		_window.on('resize' + EVENT_NS, function() {
			mfp.updateSize();
		});


		if(!mfp.st.closeOnContentClick) {
			_wrapClasses += ' mfp-auto-cursor';
		}
		
		if(_wrapClasses)
			mfp.wrap.addClass(_wrapClasses);


		// this triggers recalculation of layout, so we get it once to not to trigger twice
		var windowHeight = mfp.wH = _window.height();

		
		var windowStyles = {};

		if( mfp.fixedContentPos ) {
            if(mfp._hasScrollBar(windowHeight)){
                var s = mfp._getScrollbarSize();
                if(s) {
                    windowStyles.marginRight = s;
                }
            }
        }

		if(mfp.fixedContentPos) {
			if(!mfp.isIE7) {
				windowStyles.overflow = 'hidden';
			} else {
				// ie7 double-scroll bug
				$('body, html').css('overflow', 'hidden');
			}
		}

		
		
		var classesToadd = mfp.st.mainClass;
		if(mfp.isIE7) {
			classesToadd += ' mfp-ie7';
		}
		if(classesToadd) {
			mfp._addClassToMFP( classesToadd );
		}

		// add content
		mfp.updateItemHTML();

		_mfpTrigger('BuildControls');

		// remove scrollbar, add margin e.t.c
		$('html').css(windowStyles);
		
		// add everything to DOM
		mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );

		// Save last focused element
		mfp._lastFocusedEl = document.activeElement;
		
		// Wait for next cycle to allow CSS transition
		setTimeout(function() {
			
			if(mfp.content) {
				mfp._addClassToMFP(READY_CLASS);
				mfp._setFocus();
			} else {
				// if content is not defined (not loaded e.t.c) we add class only for BG
				mfp.bgOverlay.addClass(READY_CLASS);
			}
			
			// Trap the focus in popup
			_document.on('focusin' + EVENT_NS, mfp._onFocusIn);

		}, 16);

		mfp.isOpen = true;
		mfp.updateSize(windowHeight);
		_mfpTrigger(OPEN_EVENT);

		return data;
	},

	/**
	 * Closes the popup
	 */
	close: function() {
		if(!mfp.isOpen) return;
		_mfpTrigger(BEFORE_CLOSE_EVENT);

		mfp.isOpen = false;
		// for CSS3 animation
		if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
			mfp._addClassToMFP(REMOVING_CLASS);
			setTimeout(function() {
				mfp._close();
			}, mfp.st.removalDelay);
		} else {
			mfp._close();
		}
	},

	/**
	 * Helper for close() function
	 */
	_close: function() {
		_mfpTrigger(CLOSE_EVENT);

		var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

		mfp.bgOverlay.detach();
		mfp.wrap.detach();
		mfp.container.empty();

		if(mfp.st.mainClass) {
			classesToRemove += mfp.st.mainClass + ' ';
		}

		mfp._removeClassFromMFP(classesToRemove);

		if(mfp.fixedContentPos) {
			var windowStyles = {marginRight: ''};
			if(mfp.isIE7) {
				$('body, html').css('overflow', '');
			} else {
				windowStyles.overflow = '';
			}
			$('html').css(windowStyles);
		}
		
		_document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
		mfp.ev.off(EVENT_NS);

		// clean up DOM elements that aren't removed
		mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
		mfp.bgOverlay.attr('class', 'mfp-bg');
		mfp.container.attr('class', 'mfp-container');

		// remove close button from target element
		if(mfp.st.showCloseBtn &&
		(!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
			if(mfp.currTemplate.closeBtn)
				mfp.currTemplate.closeBtn.detach();
		}


		if(mfp.st.autoFocusLast && mfp._lastFocusedEl) {
			$(mfp._lastFocusedEl).focus(); // put tab focus back
		}
		mfp.currItem = null;	
		mfp.content = null;
		mfp.currTemplate = null;
		mfp.prevHeight = 0;

		_mfpTrigger(AFTER_CLOSE_EVENT);
	},
	
	updateSize: function(winHeight) {

		if(mfp.isIOS) {
			// fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
			var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
			var height = window.innerHeight * zoomLevel;
			mfp.wrap.css('height', height);
			mfp.wH = height;
		} else {
			mfp.wH = winHeight || _window.height();
		}
		// Fixes #84: popup incorrectly positioned with position:relative on body
		if(!mfp.fixedContentPos) {
			mfp.wrap.css('height', mfp.wH);
		}

		_mfpTrigger('Resize');

	},

	/**
	 * Set content of popup based on current index
	 */
	updateItemHTML: function() {
		var item = mfp.items[mfp.index];

		// Detach and perform modifications
		mfp.contentContainer.detach();

		if(mfp.content)
			mfp.content.detach();

		if(!item.parsed) {
			item = mfp.parseEl( mfp.index );
		}

		var type = item.type;

		_mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
		// BeforeChange event works like so:
		// _mfpOn('BeforeChange', function(e, prevType, newType) { });

		mfp.currItem = item;

		if(!mfp.currTemplate[type]) {
			var markup = mfp.st[type] ? mfp.st[type].markup : false;

			// allows to modify markup
			_mfpTrigger('FirstMarkupParse', markup);

			if(markup) {
				mfp.currTemplate[type] = $(markup);
			} else {
				// if there is no markup found we just define that template is parsed
				mfp.currTemplate[type] = true;
			}
		}

		if(_prevContentType && _prevContentType !== item.type) {
			mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
		}

		var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
		mfp.appendContent(newContent, type);

		item.preloaded = true;

		_mfpTrigger(CHANGE_EVENT, item);
		_prevContentType = item.type;

		// Append container back after its content changed
		mfp.container.prepend(mfp.contentContainer);

		_mfpTrigger('AfterChange');
	},


	/**
	 * Set HTML content of popup
	 */
	appendContent: function(newContent, type) {
		mfp.content = newContent;

		if(newContent) {
			if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
				mfp.currTemplate[type] === true) {
				// if there is no markup, we just append close button element inside
				if(!mfp.content.find('.mfp-close').length) {
					mfp.content.append(_getCloseBtn());
				}
			} else {
				mfp.content = newContent;
			}
		} else {
			mfp.content = '';
		}

		_mfpTrigger(BEFORE_APPEND_EVENT);
		mfp.container.addClass('mfp-'+type+'-holder');

		mfp.contentContainer.append(mfp.content);
	},


	/**
	 * Creates Magnific Popup data object based on given data
	 * @param  {int} index Index of item to parse
	 */
	parseEl: function(index) {
		var item = mfp.items[index],
			type;

		if(item.tagName) {
			item = { el: $(item) };
		} else {
			type = item.type;
			item = { data: item, src: item.src };
		}

		if(item.el) {
			var types = mfp.types;

			// check for 'mfp-TYPE' class
			for(var i = 0; i < types.length; i++) {
				if( item.el.hasClass('mfp-'+types[i]) ) {
					type = types[i];
					break;
				}
			}

			item.src = item.el.attr('data-mfp-src');
			if(!item.src) {
				item.src = item.el.attr('href');
			}
		}

		item.type = type || mfp.st.type || 'inline';
		item.index = index;
		item.parsed = true;
		mfp.items[index] = item;
		_mfpTrigger('ElementParse', item);

		return mfp.items[index];
	},


	/**
	 * Initializes single popup or a group of popups
	 */
	addGroup: function(el, options) {
		var eHandler = function(e) {
			e.mfpEl = this;
			mfp._openClick(e, el, options);
		};

		if(!options) {
			options = {};
		}

		var eName = 'click.magnificPopup';
		options.mainEl = el;

		if(options.items) {
			options.isObj = true;
			el.off(eName).on(eName, eHandler);
		} else {
			options.isObj = false;
			if(options.delegate) {
				el.off(eName).on(eName, options.delegate , eHandler);
			} else {
				options.items = el;
				el.off(eName).on(eName, eHandler);
			}
		}
	},
	_openClick: function(e, el, options) {
		var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


		if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
			return;
		}

		var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

		if(disableOn) {
			if($.isFunction(disableOn)) {
				if( !disableOn.call(mfp) ) {
					return true;
				}
			} else { // else it's number
				if( _window.width() < disableOn ) {
					return true;
				}
			}
		}

		if(e.type) {
			e.preventDefault();

			// This will prevent popup from closing if element is inside and popup is already opened
			if(mfp.isOpen) {
				e.stopPropagation();
			}
		}

		options.el = $(e.mfpEl);
		if(options.delegate) {
			options.items = el.find(options.delegate);
		}
		mfp.open(options);
	},


	/**
	 * Updates text on preloader
	 */
	updateStatus: function(status, text) {

		if(mfp.preloader) {
			if(_prevStatus !== status) {
				mfp.container.removeClass('mfp-s-'+_prevStatus);
			}

			if(!text && status === 'loading') {
				text = mfp.st.tLoading;
			}

			var data = {
				status: status,
				text: text
			};
			// allows to modify status
			_mfpTrigger('UpdateStatus', data);

			status = data.status;
			text = data.text;

			mfp.preloader.html(text);

			mfp.preloader.find('a').on('click', function(e) {
				e.stopImmediatePropagation();
			});

			mfp.container.addClass('mfp-s-'+status);
			_prevStatus = status;
		}
	},


	/*
		"Private" helpers that aren't private at all
	 */
	// Check to close popup or not
	// "target" is an element that was clicked
	_checkIfClose: function(target) {

		if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
			return;
		}

		var closeOnContent = mfp.st.closeOnContentClick;
		var closeOnBg = mfp.st.closeOnBgClick;

		if(closeOnContent && closeOnBg) {
			return true;
		} else {

			// We close the popup if click is on close button or on preloader. Or if there is no content.
			if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
				return true;
			}

			// if click is outside the content
			if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
				if(closeOnBg) {
					// last check, if the clicked element is in DOM, (in case it's removed onclick)
					if( $.contains(document, target) ) {
						return true;
					}
				}
			} else if(closeOnContent) {
				return true;
			}

		}
		return false;
	},
	_addClassToMFP: function(cName) {
		mfp.bgOverlay.addClass(cName);
		mfp.wrap.addClass(cName);
	},
	_removeClassFromMFP: function(cName) {
		this.bgOverlay.removeClass(cName);
		mfp.wrap.removeClass(cName);
	},
	_hasScrollBar: function(winHeight) {
		return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
	},
	_setFocus: function() {
		(mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
	},
	_onFocusIn: function(e) {
		if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
			mfp._setFocus();
			return false;
		}
	},
	_parseMarkup: function(template, values, item) {
		var arr;
		if(item.data) {
			values = $.extend(item.data, values);
		}
		_mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );

		$.each(values, function(key, value) {
			if(value === undefined || value === false) {
				return true;
			}
			arr = key.split('_');
			if(arr.length > 1) {
				var el = template.find(EVENT_NS + '-'+arr[0]);

				if(el.length > 0) {
					var attr = arr[1];
					if(attr === 'replaceWith') {
						if(el[0] !== value[0]) {
							el.replaceWith(value);
						}
					} else if(attr === 'img') {
						if(el.is('img')) {
							el.attr('src', value);
						} else {
							el.replaceWith( $('<img>').attr('src', value).attr('class', el.attr('class')) );
						}
					} else {
						el.attr(arr[1], value);
					}
				}

			} else {
				template.find(EVENT_NS + '-'+key).html(value);
			}
		});
	},

	_getScrollbarSize: function() {
		// thx David
		if(mfp.scrollbarSize === undefined) {
			var scrollDiv = document.createElement("div");
			scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
			document.body.appendChild(scrollDiv);
			mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
		}
		return mfp.scrollbarSize;
	}

}; /* MagnificPopup core prototype end */




/**
 * Public static functions
 */
$.magnificPopup = {
	instance: null,
	proto: MagnificPopup.prototype,
	modules: [],

	open: function(options, index) {
		_checkInstance();

		if(!options) {
			options = {};
		} else {
			options = $.extend(true, {}, options);
		}

		options.isObj = true;
		options.index = index || 0;
		return this.instance.open(options);
	},

	close: function() {
		return $.magnificPopup.instance && $.magnificPopup.instance.close();
	},

	registerModule: function(name, module) {
		if(module.options) {
			$.magnificPopup.defaults[name] = module.options;
		}
		$.extend(this.proto, module.proto);
		this.modules.push(name);
	},

	defaults: {

		// Info about options is in docs:
		// http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

		disableOn: 0,

		key: null,

		midClick: false,

		mainClass: '',

		preloader: true,

		focus: '', // CSS selector of input to focus after popup is opened

		closeOnContentClick: false,

		closeOnBgClick: true,

		closeBtnInside: true,

		showCloseBtn: true,

		enableEscapeKey: true,

		modal: false,

		alignTop: false,

		removalDelay: 0,

		prependTo: null,

		fixedContentPos: 'auto',

		fixedBgPos: 'auto',

		overflowY: 'auto',

		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

		tClose: 'Close (Esc)',

		tLoading: 'Loading...',

		autoFocusLast: true

	}
};



$.fn.magnificPopup = function(options) {
	_checkInstance();

	var jqEl = $(this);

	// We call some API method of first param is a string
	if (typeof options === "string" ) {

		if(options === 'open') {
			var items,
				itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
				index = parseInt(arguments[1], 10) || 0;

			if(itemOpts.items) {
				items = itemOpts.items[index];
			} else {
				items = jqEl;
				if(itemOpts.delegate) {
					items = items.find(itemOpts.delegate);
				}
				items = items.eq( index );
			}
			mfp._openClick({mfpEl:items}, jqEl, itemOpts);
		} else {
			if(mfp.isOpen)
				mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
		}

	} else {
		// clone options obj
		options = $.extend(true, {}, options);

		/*
		 * As Zepto doesn't support .data() method for objects
		 * and it works only in normal browsers
		 * we assign "options" object directly to the DOM element. FTW!
		 */
		if(_isJQ) {
			jqEl.data('magnificPopup', options);
		} else {
			jqEl[0].magnificPopup = options;
		}

		mfp.addGroup(jqEl, options);

	}
	return jqEl;
};

/*>>core*/

/*>>inline*/

var INLINE_NS = 'inline',
	_hiddenClass,
	_inlinePlaceholder,
	_lastInlineElement,
	_putInlineElementsBack = function() {
		if(_lastInlineElement) {
			_inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
			_lastInlineElement = null;
		}
	};

$.magnificPopup.registerModule(INLINE_NS, {
	options: {
		hiddenClass: 'hide', // will be appended with `mfp-` prefix
		markup: '',
		tNotFound: 'Content not found'
	},
	proto: {

		initInline: function() {
			mfp.types.push(INLINE_NS);

			_mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
				_putInlineElementsBack();
			});
		},

		getInline: function(item, template) {

			_putInlineElementsBack();

			if(item.src) {
				var inlineSt = mfp.st.inline,
					el = $(item.src);

				if(el.length) {

					// If target element has parent - we replace it with placeholder and put it back after popup is closed
					var parent = el[0].parentNode;
					if(parent && parent.tagName) {
						if(!_inlinePlaceholder) {
							_hiddenClass = inlineSt.hiddenClass;
							_inlinePlaceholder = _getEl(_hiddenClass);
							_hiddenClass = 'mfp-'+_hiddenClass;
						}
						// replace target inline element with placeholder
						_lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
					}

					mfp.updateStatus('ready');
				} else {
					mfp.updateStatus('error', inlineSt.tNotFound);
					el = $('<div>');
				}

				item.inlineElement = el;
				return el;
			}

			mfp.updateStatus('ready');
			mfp._parseMarkup(template, {}, item);
			return template;
		}
	}
});

/*>>inline*/

/*>>ajax*/
var AJAX_NS = 'ajax',
	_ajaxCur,
	_removeAjaxCursor = function() {
		if(_ajaxCur) {
			$(document.body).removeClass(_ajaxCur);
		}
	},
	_destroyAjaxRequest = function() {
		_removeAjaxCursor();
		if(mfp.req) {
			mfp.req.abort();
		}
	};

$.magnificPopup.registerModule(AJAX_NS, {

	options: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},

	proto: {
		initAjax: function() {
			mfp.types.push(AJAX_NS);
			_ajaxCur = mfp.st.ajax.cursor;

			_mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
			_mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
		},
		getAjax: function(item) {

			if(_ajaxCur) {
				$(document.body).addClass(_ajaxCur);
			}

			mfp.updateStatus('loading');

			var opts = $.extend({
				url: item.src,
				success: function(data, textStatus, jqXHR) {
					var temp = {
						data:data,
						xhr:jqXHR
					};

					_mfpTrigger('ParseAjax', temp);

					mfp.appendContent( $(temp.data), AJAX_NS );

					item.finished = true;

					_removeAjaxCursor();

					mfp._setFocus();

					setTimeout(function() {
						mfp.wrap.addClass(READY_CLASS);
					}, 16);

					mfp.updateStatus('ready');

					_mfpTrigger('AjaxContentAdded');
				},
				error: function() {
					_removeAjaxCursor();
					item.finished = item.loadError = true;
					mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
				}
			}, mfp.st.ajax.settings);

			mfp.req = $.ajax(opts);

			return '';
		}
	}
});

/*>>ajax*/

/*>>image*/
var _imgInterval,
	_getTitle = function(item) {
		if(item.data && item.data.title !== undefined)
			return item.data.title;

		var src = mfp.st.image.titleSrc;

		if(src) {
			if($.isFunction(src)) {
				return src.call(mfp, item);
			} else if(item.el) {
				return item.el.attr(src) || '';
			}
		}
		return '';
	};

$.magnificPopup.registerModule('image', {

	options: {
		markup: '<div class="mfp-figure">'+
					'<div class="mfp-close"></div>'+
					'<figure>'+
						'<div class="mfp-img"></div>'+
						'<figcaption>'+
							'<div class="mfp-bottom-bar">'+
								'<div class="mfp-title"></div>'+
								'<div class="mfp-counter"></div>'+
							'</div>'+
						'</figcaption>'+
					'</figure>'+
				'</div>',
		cursor: 'mfp-zoom-out-cur',
		titleSrc: 'title',
		verticalFit: true,
		tError: '<a href="%url%">The image</a> could not be loaded.'
	},

	proto: {
		initImage: function() {
			var imgSt = mfp.st.image,
				ns = '.image';

			mfp.types.push('image');

			_mfpOn(OPEN_EVENT+ns, function() {
				if(mfp.currItem.type === 'image' && imgSt.cursor) {
					$(document.body).addClass(imgSt.cursor);
				}
			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(imgSt.cursor) {
					$(document.body).removeClass(imgSt.cursor);
				}
				_window.off('resize' + EVENT_NS);
			});

			_mfpOn('Resize'+ns, mfp.resizeImage);
			if(mfp.isLowIE) {
				_mfpOn('AfterChange', mfp.resizeImage);
			}
		},
		resizeImage: function() {
			var item = mfp.currItem;
			if(!item || !item.img) return;

			if(mfp.st.image.verticalFit) {
				var decr = 0;
				// fix box-sizing in ie7/8
				if(mfp.isLowIE) {
					decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
				}
				item.img.css('max-height', mfp.wH-decr);
			}
		},
		_onImageHasSize: function(item) {
			if(item.img) {

				item.hasSize = true;

				if(_imgInterval) {
					clearInterval(_imgInterval);
				}

				item.isCheckingImgSize = false;

				_mfpTrigger('ImageHasSize', item);

				if(item.imgHidden) {
					if(mfp.content)
						mfp.content.removeClass('mfp-loading');

					item.imgHidden = false;
				}

			}
		},

		/**
		 * Function that loops until the image has size to display elements that rely on it asap
		 */
		findImageSize: function(item) {

			var counter = 0,
				img = item.img[0],
				mfpSetInterval = function(delay) {

					if(_imgInterval) {
						clearInterval(_imgInterval);
					}
					// decelerating interval that checks for size of an image
					_imgInterval = setInterval(function() {
						if(img.naturalWidth > 0) {
							mfp._onImageHasSize(item);
							return;
						}

						if(counter > 200) {
							clearInterval(_imgInterval);
						}

						counter++;
						if(counter === 3) {
							mfpSetInterval(10);
						} else if(counter === 40) {
							mfpSetInterval(50);
						} else if(counter === 100) {
							mfpSetInterval(500);
						}
					}, delay);
				};

			mfpSetInterval(1);
		},

		getImage: function(item, template) {

			var guard = 0,

				// image load complete handler
				onLoadComplete = function() {
					if(item) {
						if (item.img[0].complete) {
							item.img.off('.mfploader');

							if(item === mfp.currItem){
								mfp._onImageHasSize(item);

								mfp.updateStatus('ready');
							}

							item.hasSize = true;
							item.loaded = true;

							_mfpTrigger('ImageLoadComplete');

						}
						else {
							// if image complete check fails 200 times (20 sec), we assume that there was an error.
							guard++;
							if(guard < 200) {
								setTimeout(onLoadComplete,100);
							} else {
								onLoadError();
							}
						}
					}
				},

				// image error handler
				onLoadError = function() {
					if(item) {
						item.img.off('.mfploader');
						if(item === mfp.currItem){
							mfp._onImageHasSize(item);
							mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
						}

						item.hasSize = true;
						item.loaded = true;
						item.loadError = true;
					}
				},
				imgSt = mfp.st.image;


			var el = template.find('.mfp-img');
			if(el.length) {
				var img = document.createElement('img');
				img.className = 'mfp-img';
				if(item.el && item.el.find('img').length) {
					img.alt = item.el.find('img').attr('alt');
				}
				item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
				img.src = item.src;

				// without clone() "error" event is not firing when IMG is replaced by new IMG
				// TODO: find a way to avoid such cloning
				if(el.is('img')) {
					item.img = item.img.clone();
				}

				img = item.img[0];
				if(img.naturalWidth > 0) {
					item.hasSize = true;
				} else if(!img.width) {
					item.hasSize = false;
				}
			}

			mfp._parseMarkup(template, {
				title: _getTitle(item),
				img_replaceWith: item.img
			}, item);

			mfp.resizeImage();

			if(item.hasSize) {
				if(_imgInterval) clearInterval(_imgInterval);

				if(item.loadError) {
					template.addClass('mfp-loading');
					mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
				} else {
					template.removeClass('mfp-loading');
					mfp.updateStatus('ready');
				}
				return template;
			}

			mfp.updateStatus('loading');
			item.loading = true;

			if(!item.hasSize) {
				item.imgHidden = true;
				template.addClass('mfp-loading');
				mfp.findImageSize(item);
			}

			return template;
		}
	}
});

/*>>image*/

/*>>zoom*/
var hasMozTransform,
	getHasMozTransform = function() {
		if(hasMozTransform === undefined) {
			hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
		}
		return hasMozTransform;
	};

$.magnificPopup.registerModule('zoom', {

	options: {
		enabled: false,
		easing: 'ease-in-out',
		duration: 300,
		opener: function(element) {
			return element.is('img') ? element : element.find('img');
		}
	},

	proto: {

		initZoom: function() {
			var zoomSt = mfp.st.zoom,
				ns = '.zoom',
				image;

			if(!zoomSt.enabled || !mfp.supportsTransition) {
				return;
			}

			var duration = zoomSt.duration,
				getElToAnimate = function(image) {
					var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
						transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
						cssObj = {
							position: 'fixed',
							zIndex: 9999,
							left: 0,
							top: 0,
							'-webkit-backface-visibility': 'hidden'
						},
						t = 'transition';

					cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;

					newImg.css(cssObj);
					return newImg;
				},
				showMainContent = function() {
					mfp.content.css('visibility', 'visible');
				},
				openTimeout,
				animatedImg;

			_mfpOn('BuildControls'+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);
					mfp.content.css('visibility', 'hidden');

					// Basically, all code below does is clones existing image, puts in on top of the current one and animated it

					image = mfp._getItemToZoom();

					if(!image) {
						showMainContent();
						return;
					}

					animatedImg = getElToAnimate(image);

					animatedImg.css( mfp._getOffset() );

					mfp.wrap.append(animatedImg);

					openTimeout = setTimeout(function() {
						animatedImg.css( mfp._getOffset( true ) );
						openTimeout = setTimeout(function() {

							showMainContent();

							setTimeout(function() {
								animatedImg.remove();
								image = animatedImg = null;
								_mfpTrigger('ZoomAnimationEnded');
							}, 16); // avoid blink when switching images

						}, duration); // this timeout equals animation duration

					}, 16); // by adding this timeout we avoid short glitch at the beginning of animation


					// Lots of timeouts...
				}
			});
			_mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {

					clearTimeout(openTimeout);

					mfp.st.removalDelay = duration;

					if(!image) {
						image = mfp._getItemToZoom();
						if(!image) {
							return;
						}
						animatedImg = getElToAnimate(image);
					}

					animatedImg.css( mfp._getOffset(true) );
					mfp.wrap.append(animatedImg);
					mfp.content.css('visibility', 'hidden');

					setTimeout(function() {
						animatedImg.css( mfp._getOffset() );
					}, 16);
				}

			});

			_mfpOn(CLOSE_EVENT+ns, function() {
				if(mfp._allowZoom()) {
					showMainContent();
					if(animatedImg) {
						animatedImg.remove();
					}
					image = null;
				}
			});
		},

		_allowZoom: function() {
			return mfp.currItem.type === 'image';
		},

		_getItemToZoom: function() {
			if(mfp.currItem.hasSize) {
				return mfp.currItem.img;
			} else {
				return false;
			}
		},

		// Get element postion relative to viewport
		_getOffset: function(isLarge) {
			var el;
			if(isLarge) {
				el = mfp.currItem.img;
			} else {
				el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
			}

			var offset = el.offset();
			var paddingTop = parseInt(el.css('padding-top'),10);
			var paddingBottom = parseInt(el.css('padding-bottom'),10);
			offset.top -= ( $(window).scrollTop() - paddingTop );


			/*

			Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

			 */
			var obj = {
				width: el.width(),
				// fix Zepto height+padding issue
				height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
			};

			// I hate to do this, but there is no another option
			if( getHasMozTransform() ) {
				obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
			} else {
				obj.left = offset.left;
				obj.top = offset.top;
			}
			return obj;
		}

	}
});



/*>>zoom*/

/*>>iframe*/

var IFRAME_NS = 'iframe',
	_emptyPage = '//about:blank',

	_fixIframeBugs = function(isShowing) {
		if(mfp.currTemplate[IFRAME_NS]) {
			var el = mfp.currTemplate[IFRAME_NS].find('iframe');
			if(el.length) {
				// reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
				if(!isShowing) {
					el[0].src = _emptyPage;
				}

				// IE8 black screen bug fix
				if(mfp.isIE8) {
					el.css('display', isShowing ? 'block' : 'none');
				}
			}
		}
	};

$.magnificPopup.registerModule(IFRAME_NS, {

	options: {
		markup: '<div class="mfp-iframe-scaler">'+
					'<div class="mfp-close"></div>'+
					'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
				'</div>',

		srcAction: 'iframe_src',

		// we don't care and support only one default type of URL by default
		patterns: {
			youtube: {
				index: 'youtube.com',
				id: 'v=',
				src: '//www.youtube.com/embed/%id%?autoplay=1'
			},
			vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			},
			gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			}
		}
	},

	proto: {
		initIframe: function() {
			mfp.types.push(IFRAME_NS);

			_mfpOn('BeforeChange', function(e, prevType, newType) {
				if(prevType !== newType) {
					if(prevType === IFRAME_NS) {
						_fixIframeBugs(); // iframe if removed
					} else if(newType === IFRAME_NS) {
						_fixIframeBugs(true); // iframe is showing
					}
				}// else {
					// iframe source is switched, don't do anything
				//}
			});

			_mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
				_fixIframeBugs();
			});
		},

		getIframe: function(item, template) {
			var embedSrc = item.src;
			var iframeSt = mfp.st.iframe;

			$.each(iframeSt.patterns, function() {
				if(embedSrc.indexOf( this.index ) > -1) {
					if(this.id) {
						if(typeof this.id === 'string') {
							embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
						} else {
							embedSrc = this.id.call( this, embedSrc );
						}
					}
					embedSrc = this.src.replace('%id%', embedSrc );
					return false; // break;
				}
			});

			var dataObj = {};
			if(iframeSt.srcAction) {
				dataObj[iframeSt.srcAction] = embedSrc;
			}
			mfp._parseMarkup(template, dataObj, item);

			mfp.updateStatus('ready');

			return template;
		}
	}
});



/*>>iframe*/

/*>>gallery*/
/**
 * Get looped index depending on number of slides
 */
var _getLoopedId = function(index) {
		var numSlides = mfp.items.length;
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	_replaceCurrTotal = function(text, curr, total) {
		return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
	};

$.magnificPopup.registerModule('gallery', {

	options: {
		enabled: false,
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0,2],
		navigateByImgClick: true,
		arrows: true,

		tPrev: 'Previous (Left arrow key)',
		tNext: 'Next (Right arrow key)',
		tCounter: '%curr% of %total%'
	},

	proto: {
		initGallery: function() {

			var gSt = mfp.st.gallery,
				ns = '.mfp-gallery';

			mfp.direction = true; // true - next, false - prev

			if(!gSt || !gSt.enabled ) return false;

			_wrapClasses += ' mfp-gallery';

			_mfpOn(OPEN_EVENT+ns, function() {

				if(gSt.navigateByImgClick) {
					mfp.wrap.on('click'+ns, '.mfp-img', function() {
						if(mfp.items.length > 1) {
							mfp.next();
							return false;
						}
					});
				}

				_document.on('keydown'+ns, function(e) {
					if (e.keyCode === 37) {
						mfp.prev();
					} else if (e.keyCode === 39) {
						mfp.next();
					}
				});
			});

			_mfpOn('UpdateStatus'+ns, function(e, data) {
				if(data.text) {
					data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
				}
			});

			_mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
				var l = mfp.items.length;
				values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
			});

			_mfpOn('BuildControls' + ns, function() {
				if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
					var markup = gSt.arrowMarkup,
						arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),
						arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);

					arrowLeft.click(function() {
						mfp.prev();
					});
					arrowRight.click(function() {
						mfp.next();
					});

					mfp.container.append(arrowLeft.add(arrowRight));
				}
			});

			_mfpOn(CHANGE_EVENT+ns, function() {
				if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

				mfp._preloadTimeout = setTimeout(function() {
					mfp.preloadNearbyImages();
					mfp._preloadTimeout = null;
				}, 16);
			});


			_mfpOn(CLOSE_EVENT+ns, function() {
				_document.off(ns);
				mfp.wrap.off('click'+ns);
				mfp.arrowRight = mfp.arrowLeft = null;
			});

		},
		next: function() {
			mfp.direction = true;
			mfp.index = _getLoopedId(mfp.index + 1);
			mfp.updateItemHTML();
		},
		prev: function() {
			mfp.direction = false;
			mfp.index = _getLoopedId(mfp.index - 1);
			mfp.updateItemHTML();
		},
		goTo: function(newIndex) {
			mfp.direction = (newIndex >= mfp.index);
			mfp.index = newIndex;
			mfp.updateItemHTML();
		},
		preloadNearbyImages: function() {
			var p = mfp.st.gallery.preload,
				preloadBefore = Math.min(p[0], mfp.items.length),
				preloadAfter = Math.min(p[1], mfp.items.length),
				i;

			for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
				mfp._preloadItem(mfp.index+i);
			}
			for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
				mfp._preloadItem(mfp.index-i);
			}
		},
		_preloadItem: function(index) {
			index = _getLoopedId(index);

			if(mfp.items[index].preloaded) {
				return;
			}

			var item = mfp.items[index];
			if(!item.parsed) {
				item = mfp.parseEl( index );
			}

			_mfpTrigger('LazyLoad', item);

			if(item.type === 'image') {
				item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
					item.hasSize = true;
				}).on('error.mfploader', function() {
					item.hasSize = true;
					item.loadError = true;
					_mfpTrigger('LazyLoadError', item);
				}).attr('src', item.src);
			}


			item.preloaded = true;
		}
	}
});

/*>>gallery*/

/*>>retina*/

var RETINA_NS = 'retina';

$.magnificPopup.registerModule(RETINA_NS, {
	options: {
		replaceSrc: function(item) {
			return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
		},
		ratio: 1 // Function or number.  Set to 1 to disable.
	},
	proto: {
		initRetina: function() {
			if(window.devicePixelRatio > 1) {

				var st = mfp.st.retina,
					ratio = st.ratio;

				ratio = !isNaN(ratio) ? ratio : ratio();

				if(ratio > 1) {
					_mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
						item.img.css({
							'max-width': item.img[0].naturalWidth / ratio,
							'width': '100%'
						});
					});
					_mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
						item.src = st.replaceSrc(item, ratio);
					});
				}
			}

		}
	}
});

/*>>retina*/
 _checkInstance(); }));
/**
* Maplace.js
*
* Copyright (c) 2013 Daniele Moraschi
* Licensed under the MIT license
* For all details and documentation:
* http://maplacejs.com
*
* @version  @VERSION
* @preserve
*/

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.Maplace = factory(root.jQuery);
    }

}(this, function($) {
    'use strict';

    var html_dropdown,
        html_ullist;

    //dropdown menu type
    html_dropdown = {
        activateCurrent: function(index) {
            this.html_element.find('select').val(index);
        },

        getHtml: function() {
            var self = this,
                html = '',
                title,
                a;

            if (this.ln > 1) {
                html += '<select class="dropdown controls ' + this.o.controls_cssclass + '">';

                if (this.ShowOnMenu(this.view_all_key)) {
                    html += '<option value="' + this.view_all_key + '">' + this.o.view_all_text + '</option>';
                }

                for (a = 0; a < this.ln; a += 1) {
                    if (this.ShowOnMenu(a)) {
                        html += '<option value="' + (a + 1) + '">' + (this.o.locations[a].title || ('#' + (a + 1))) + '</option>';
                    }
                }
                html += '</select>';

                html = $(html).bind('change', function() {
                    self.ViewOnMap(this.value);
                });
            }

            title = this.o.controls_title;
            if (this.o.controls_title) {
                title = $('<div class="controls_title"></div>').css(this.o.controls_applycss ? {
                    fontWeight: 'bold',
                    fontSize: this.o.controls_on_map ? '12px' : 'inherit',
                    padding: '3px 10px 5px 0'
                } : {}).append(this.o.controls_title);
            }

            this.html_element = $('<div class="wrap_controls"></div>').append(title).append(html);

            return this.html_element;
        }
    };


    //ul list menu type
    html_ullist = {
        html_a: function(i, hash, ttl) {
            var self = this,
                index = hash || (i + 1),
                title = ttl || this.o.locations[i].title,
                el_a = $('<a data-load="' + index + '" id="ullist_a_' + index + '" href="#' + index + '" title="' + title + '"><span>' + (title || ('#' + (i + 1))) + '</span></a>');

            el_a.css(this.o.controls_applycss ? {
                color: '#666',
                display: 'block',
                padding: '5px',
                fontSize: this.o.controls_on_map ? '12px' : 'inherit',
                textDecoration: 'none'
            } : {});

            el_a.on('click', function(e) {
                e.preventDefault();
                var i = $(this).attr('data-load');
                self.ViewOnMap(i);
            });

            return el_a;
        },

        activateCurrent: function(index) {
            this.html_element.find('li').removeClass('active');
            this.html_element.find('#ullist_a_' + index).parent().addClass('active');
        },

        getHtml: function() {
            var html = $('<ul class=\'ullist controls ' + this.o.controls_cssclass + '\'></ul>').css(this.o.controls_applycss ? {
                margin: 0,
                padding: 0,
                listStyleType: 'none'
            } : {}),
                title, a;

            if (this.ShowOnMenu(this.view_all_key)) {
                html.append($('<li></li>').append(html_ullist.html_a.call(this, false, this.view_all_key, this.o.view_all_text)));
            }

            for (a = 0; a < this.ln; a++) {
                if (this.ShowOnMenu(a)) {
                    html.append($('<li></li>').append(html_ullist.html_a.call(this, a)));
                }
            }

            title = this.o.controls_title;
            if (this.o.controls_title) {
                title = $('<div class="controls_title"></div>').css(this.o.controls_applycss ? {
                    fontWeight: 'bold',
                    padding: '3px 10px 5px 0',
                    fontSize: this.o.controls_on_map ? '12px' : 'inherit'
                } : {}).append(this.o.controls_title);
            }

            this.html_element = $('<div class="wrap_controls"></div>').append(title).append(html);

            return this.html_element;
        }
    };


    /**
    * Create a new instance
    * @class Maplace
    * @constructor
    */
    function Maplace(args) {
        this.VERSION = '@VERSION';
        this.loaded = false;
        this.markers = [];
        this.circles = [];
        this.oMap = false;
        this.view_all_key = 'all';

        this.infowindow = null;
        this.maxZIndex = 0;
        this.ln = 0;
        this.oMap = false;
        this.oBounds = null;
        this.map_div = null;
        this.canvas_map = null;
        this.controls_wrapper = null;
        this.current_control = null;
        this.current_index = null;
        this.Polyline = null;
        this.Polygon = null;
        this.Fusion = null;
        this.directionsService = null;
        this.directionsDisplay = null;

        //default options
        this.o = {
            debug: false,
            map_div: '#gmap',
            controls_div: '#controls',
            generate_controls: true,
            controls_type: 'dropdown',
            controls_cssclass: '',
            controls_title: '',
            controls_on_map: true,
            controls_applycss: true,
            controls_position: google.maps.ControlPosition.RIGHT_TOP,
            type: 'marker',
            view_all: true,
            view_all_text: 'View All',
            pan_on_click: true,
            start: 0,
            locations: [],
            shared: {},
            map_options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            stroke_options: {
                strokeColor: '#0000FF',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#0000FF',
                fillOpacity: 0.4
            },
            directions_options: {
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
                optimizeWaypoints: false,
                provideRouteAlternatives: false,
                avoidHighways: false,
                avoidTolls: false
            },
            circle_options: {
                radius: 100,
                visible: true
            },
            styles: {},
            fusion_options: {},
            directions_panel: null,
            draggable: false,
            editable: false,
            show_infowindows: true,
            show_markers: true,
            infowindow_type: 'bubble',
            listeners: {},

            //events
            beforeViewAll: function() {},
            afterViewAll: function() {},
            beforeShow: function(index, location, marker) {},
            afterShow: function(index, location, marker) {},
            afterCreateMarker: function(index, location, marker) {},

            beforeCloseInfowindow: function(index, location) {},
            afterCloseInfowindow: function(index, location) {},
            beforeOpenInfowindow: function(index, location, marker) {},
            afterOpenInfowindow: function(index, location, marker) {},

            afterRoute: function(distance, status, result) {},
            onPolylineClick: function(obj) {},
            onPolygonClick: function(obj) {},

            circleRadiusChanged: function(index, circle, marker) {},
            circleCenterChanged: function(index, circle, marker) {},

            drag: function(index, location, marker) {},
            dragEnd: function(index, location, marker) {},
            dragStart: function(index, location, marker) {}
        };

        //default menu types
        this.AddControl('dropdown', html_dropdown);
        this.AddControl('list', html_ullist);

        if (args && args.type === 'directions') {
            !args.show_markers && (args.show_markers = false);
            !args.show_infowindows && (args.show_infowindows = false);
        }

        //init
        $.extend(true, this.o, args);
    }

    //where to store the menu types
    Maplace.prototype.controls = {};

    //initialize google map object
    Maplace.prototype.create_objMap = function() {
        var self = this,
            count = 0,
            i;

        //if styled
        for (i in this.o.styles) {
            if (this.o.styles.hasOwnProperty(i)) {
                if (count === 0) {
                    this.o.map_options.mapTypeControlOptions = {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP]
                    };
                }
                count++;
                this.o.map_options.mapTypeControlOptions.mapTypeIds.push('map_style_' + count);
            }
        }

        //if init
        if (!this.loaded) {
            try {
                this.map_div.css({
                    position: 'relative',
                    overflow: 'hidden'
                });

                //create the container div into map_div
                this.canvas_map = $('<div>').addClass('canvas_map').css({
                    width: '100%',
                    height: '100%'
                }).appendTo(this.map_div);

                this.oMap = new google.maps.Map(this.canvas_map.get(0), this.o.map_options);

            } catch (err) {
                this.debug('create_objMap::' + this.map_div.selector, err.toString());
            }

        //else loads the new optionsl
        } else {
            self.oMap.setOptions(this.o.map_options);
        }

        //if styled
        count = 0;
        for (i in this.o.styles) {
            if (this.o.styles.hasOwnProperty(i)) {
                count++;
                this.oMap.mapTypes.set('map_style_' + count, new google.maps.StyledMapType(this.o.styles[i], {
                    name: i
                }));
                this.oMap.setMapTypeId('map_style_' + count);
            }
        }
    };

    //adds markers to the map
    Maplace.prototype.add_markers_to_objMap = function() {
        var a,
            point,
            type = this.o.type || 'marker';

        //switch how to display the locations
        switch (type) {
            case 'marker':
                for (a = 0; a < this.ln; a++) {
                    point = this.create_objPoint(a);
                    this.create.marker.call(this, a, point);
                }
                break;
            default:
                this.create[type].apply(this);
                break;
        }
    };

    //create the main object point
    Maplace.prototype.create_objPoint = function(index) {
        var point = $.extend({}, this.o.locations[index]),
            visibility = point.visible === undefined ? undefined : point.visible;

        !point.type && (point.type = this.o.type);

        //set obj map
        point.map = this.oMap;
        point.position = new google.maps.LatLng(point.lat, point.lon);
        point.zIndex = point.zIndex === undefined ? 10000 : (point.zIndex + 100);
        point.visible = visibility === undefined  ? this.o.show_markers : visibility;

        this.o.maxZIndex = point.zIndex > this.maxZIndex ? point.zIndex : this.maxZIndex;

        if (point.image) {
            point.icon = new google.maps.MarkerImage(
                point.image,
                new google.maps.Size(point.image_w || 32, point.image_h || 32),
                new google.maps.Point(0, 0),
                new google.maps.Point((point.image_w || 32) / 2, (point.image_h || 32)  / 2)
            );
        }

        return point;
    };

    //create the main object circle
    Maplace.prototype.create_objCircle = function(point) {
        var def_stroke_opz,
            def_circle_opz,
            circle;

        circle = $.extend({}, point);
        def_stroke_opz = $.extend({}, this.o.stroke_options);
        def_circle_opz = $.extend({}, this.o.circle_options);

        $.extend(def_stroke_opz, point.stroke_options || {});
        $.extend(circle, def_stroke_opz);

        $.extend(def_circle_opz, point.circle_options || {});
        $.extend(circle, def_circle_opz);

        circle.center = point.position;
        circle.draggable = false;
        circle.zIndex = point.zIndex > 0 ? point.zIndex - 10 : 1;

        return circle;
    };

    //create the main object point
    Maplace.prototype.add_markerEv = function(index, point, marker) {
        var self = this;

        google.maps.event.addListener(marker, 'click', function(ev) {
            self.o.beforeShow(index, point, marker);

            //show infowindow?
            if (self.o.show_infowindows && (point.show_infowindow === false ? false : true)) {
                self.open_infowindow(index, marker, ev);
            }

            //pan and zoom the map
            if (self.o.pan_on_click && (point.pan_on_click === false ? false : true)) {
                self.oMap.panTo(point.position);
                point.zoom && self.oMap.setZoom(point.zoom);
            }

            //activate related menu link
            if (self.current_control && self.o.generate_controls && self.current_control.activateCurrent) {
                self.current_control.activateCurrent.call(self, index + 1);
            }

            //update current location index
            self.current_index = index;

            self.o.afterShow(index, point, marker);
        });

        if (point.draggable) {
            this.add_dragEv(index, point, marker);
        }
    };

    //add events to circles objs
    Maplace.prototype.add_circleEv = function(index, circle, marker) {
        var self = this;

        google.maps.event.addListener(marker, 'click', function() {
            self.ViewOnMap(index + 1);
        });

        google.maps.event.addListener(marker, 'center_changed', function() {
            self.o.circleCenterChanged(index, circle, marker);
        });

        google.maps.event.addListener(marker, 'radius_changed', function() {
            self.o.circleRadiusChanged(index, circle, marker);
        });

        if (circle.draggable) {
            this.add_dragEv(index, circle, marker);
        }
    };

    //add drag events
    Maplace.prototype.add_dragEv = function(index, obj, marker) {
        var self = this;

        google.maps.event.addListener(marker, 'drag', function(ev) {
            var pos,
                extraType;

            if (marker.getPosition) {
                pos = marker.getPosition();
            } else if (marker.getCenter) {
                pos = marker.getCenter();
            } else {
                return;
            }

            //update circle position
            if (self.circles[index]) {
                self.circles[index].setCenter(pos);
            }

            //update polygon or polyline if defined
            if (self.Polyline) {
                extraType = 'Polyline';
            } else if (self.Polygon) {
                extraType = 'Polygon';
            }

            if (extraType) {
                var path = self[extraType].getPath(),
                    pathArray = path.getArray(),
                    arr = [],
                    i = 0;

                for (; i < pathArray.length; ++i) {
                    arr[i] = (index === i) ?
                        new google.maps.LatLng(pos.lat(), pos.lng())
                        : new google.maps.LatLng(pathArray[i].lat(), pathArray[i].lng());
                }

                self[extraType].setPath(new google.maps.MVCArray(arr));
                self.add_polyEv(extraType);
            }

            //fire drag event
            self.o.drag(index, obj, marker);
        });

        google.maps.event.addListener(marker, 'dragend', function() {
            self.o.dragEnd(index, obj, marker);
        });

        google.maps.event.addListener(marker, 'dragstart', function() {
            self.o.dragStart(index, obj, marker);
        });

        google.maps.event.addListener(marker, 'center_changed', function() {
            //update marker position
            if (self.markers[index] && marker.getCenter) {
                self.markers[index].setPosition(marker.getCenter());
            }

            self.o.drag(index, obj, marker);
        });
    };

    //add events to poly objs
    Maplace.prototype.add_polyEv = function(typeName) {
        var self = this;

        google.maps.event.addListener(this[typeName].getPath(), 'set_at', function(index, obj) {
            var item = self[typeName].getPath().getAt(index),
                newPos = new google.maps.LatLng(item.lat(), item.lng());

            self.markers[index] && self.markers[index].setPosition(newPos);
            self.circles[index] && self.circles[index].setCenter(newPos);

            self.o['on' + typeName + 'Changed'](index, obj, self[typeName].getPath().getArray());
        });
    };

    //wrapper for the map types
    Maplace.prototype.create = {

        //single marker
        marker: function(index, point, marker) {
            var self = this,
                circle;

            //allow mix circles with markers
            if (point.type === 'circle' && !marker) {
                circle = this.create_objCircle(point);

                if (!point.visible) {
                    circle.draggable = point.draggable;
                }

                marker = new google.maps.Circle(circle);
                this.add_circleEv(index, circle, marker);

                //store the new circle
                this.circles[index] = marker;
            }

            point.type = 'marker';

            //create the marker and add click event
            marker = new google.maps.Marker(point);
            this.add_markerEv(index, point, marker);

            //extends bounds with this location
            this.oBounds.extend(point.position);

            //store the new marker
            this.markers[index] = marker;

            this.o.afterCreateMarker(index, point, marker);

            return marker;
        },


        //circle mode
        circle: function() {
            var self = this,
                a,
                point,
                circle,
                marker;

            for (a = 0; a < this.ln; a++) {
                point = this.create_objPoint(a);

                //allow mix markers with circles
                if (point.type === 'circle') {
                    circle = this.create_objCircle(point);

                    if (!point.visible) {
                        circle.draggable = point.draggable;
                    }

                    marker = new google.maps.Circle(circle);
                    this.add_circleEv(a, circle, marker);

                    //store the new circle
                    this.circles[a] = marker;
                }

                point.type = 'marker';
                this.create.marker.call(this, a, point, marker);
            }
        },


        //polyline mode
        polyline: function() {
            var self = this,
                a,
                point,
                stroke = $.extend({}, this.o.stroke_options);

            stroke.path = [];
            stroke.draggable = this.o.draggable;
            stroke.editable = this.o.editable;
            stroke.map = this.oMap;
            stroke.zIndex = this.o.maxZIndex + 100;

            //create the path and location marker
            for (a = 0; a < this.ln; a++) {
                point = this.create_objPoint(a);
                this.create.marker.call(this, a, point);

                stroke.path.push(point.position);
            }

            this.Polyline ?
                this.Polyline.setOptions(stroke)
                : this.Polyline = new google.maps.Polyline(stroke);

            this.add_polyEv('Polyline');
        },


        //polygon mode
        polygon: function() {
            var self = this,
                a,
                point,
                stroke = $.extend({}, this.o.stroke_options);

            stroke.path = [];
            stroke.draggable = this.o.draggable;
            stroke.editable = this.o.editable;
            stroke.map = this.oMap;
            stroke.zIndex = this.o.maxZIndex + 100;

            //create the path and location marker
            for (a = 0; a < this.ln; a++) {
                point = this.create_objPoint(a);
                this.create.marker.call(this, a, point);

                stroke.path.push(point.position);
            }

            this.Polygon ?
                this.Polygon.setOptions(stroke)
                : this.Polygon = new google.maps.Polygon(stroke);

            google.maps.event.addListener(this.Polygon, 'click', function(obj) {
                self.o.onPolygonClick(obj);
            });

            this.add_polyEv('Polygon');
        },


        //fusion tables
        fusion: function() {
            this.o.fusion_options.styles = [this.o.stroke_options];
            this.o.fusion_options.map = this.oMap;

            this.Fusion ?
                this.Fusion.setOptions(this.o.fusion_options)
                : this.Fusion = new google.maps.FusionTablesLayer(this.o.fusion_options);
        },


        //directions mode
        directions: function() {
            var self = this,
                a,
                point,
                stopover,
                origin,
                destination,
                waypoints = [],
                distance = 0;

            //create the waypoints and location marker
            for (a = 0; a < this.ln; a++) {
                point = this.create_objPoint(a);

                //first location start point
                if (a === 0) {
                    origin = point.position;

                //last location end point
                } else if (a === (this.ln - 1)) {
                    destination = point.position;

                //waypoints in the middle
                } else {
                    stopover = this.o.locations[a].stopover === true ? true : false;
                    waypoints.push({
                        location: point.position,
                        stopover: stopover
                    });
                }

                this.create.marker.call(this, a, point);
            }

            this.o.directions_options.origin = origin;
            this.o.directions_options.destination = destination;
            this.o.directions_options.waypoints = waypoints;

            this.directionsService || (this.directionsService = new google.maps.DirectionsService());
            this.directionsDisplay ?
                this.directionsDisplay.setOptions({draggable: this.o.draggable})
                : this.directionsDisplay = new google.maps.DirectionsRenderer({draggable: this.o.draggable});

            this.directionsDisplay.setMap(this.oMap);

            //show the directions panel
            if (this.o.directions_panel) {
                this.o.directions_panel = $(this.o.directions_panel);
                this.directionsDisplay.setPanel(this.o.directions_panel.get(0));
            }

            if (this.o.draggable) {
                google.maps.event.addListener(this.directionsDisplay, 'directions_changed', function() {
                    distance = self.compute_distance(self.directionsDisplay.directions);
                    self.o.afterRoute(distance);
                });
            }

            this.directionsService.route(this.o.directions_options, function(result, status) {
                //directions found
                if (status === google.maps.DirectionsStatus.OK) {
                    distance = self.compute_distance(result);
                    self.directionsDisplay.setDirections(result);
                }
                self.o.afterRoute(distance, status, result);
            });
        }
    };

    //route distance
    Maplace.prototype.compute_distance = function(result) {
        var total = 0,
            i,
            myroute = result.routes[0],
            rlen = myroute.legs.length;

        for (i = 0; i < rlen; i++) {
            total += myroute.legs[i].distance.value;
        }

        return total;
    };

    //wrapper for the infowindow types
    Maplace.prototype.type_to_open = {
        //google default infowindow
        bubble: function(location) {
            this.infowindow = new google.maps.InfoWindow({
                content: location.html || ''
            });
        }
    };

    //open the infowindow
    Maplace.prototype.open_infowindow = function(index, marker, ev) {
        //close if any open
        this.CloseInfoWindow();
        var point = this.o.locations[index],
            type = this.o.infowindow_type;

        //show if content and valid infowindow type provided
        if (point.html && this.type_to_open[type]) {
            this.o.beforeOpenInfowindow(index, point, marker);
            this.type_to_open[type].call(this, point);
            this.infowindow.open(this.oMap, marker);
            this.o.afterOpenInfowindow(index, point, marker);
        }
    };

    //gets the html for the menu
    Maplace.prototype.get_html_controls = function() {
        if (this.controls[this.o.controls_type] && this.controls[this.o.controls_type].getHtml) {
            this.current_control = this.controls[this.o.controls_type];

            return this.current_control.getHtml.apply(this);
        }
        return '';
    };

    //creates the controls menu
    Maplace.prototype.generate_controls = function() {
        //append menu on the div container
        if (!this.o.controls_on_map) {
            this.controls_wrapper.empty();
            this.controls_wrapper.append(this.get_html_controls());
            return;
        }

        //else
        //controls in map
        var cntr = $('<div class="on_gmap ' + this.o.controls_type + ' gmap_controls"></div>')
            .css(this.o.controls_applycss ? {margin: '5px'} : {}),

            inner = $(this.get_html_controls()).css(this.o.controls_applycss ? {
                background: '#fff',
                padding: '5px',
                border: '1px solid #eee',
                boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px',
                maxHeight: this.map_div.find('.canvas_map').outerHeight() - 80,
                minWidth: 100,
                overflowY: 'auto',
                overflowX: 'hidden'
            } : {});

        cntr.append(inner);

        //attach controls
        this.oMap.controls[this.o.controls_position].push(cntr.get(0));
    };

    //resets obj map, markers, bounds, listeners, controllers
    Maplace.prototype.init_map = function() {
        var self = this;

        this.Polyline && this.Polyline.setMap(null);
        this.Polygon && this.Polygon.setMap(null);
        this.Fusion && this.Fusion.setMap(null);
        this.directionsDisplay && this.directionsDisplay.setMap(null);

        for (var i = this.markers.length - 1; i >= 0; i -= 1) {
            try {
                this.markers[i] && this.markers[i].setMap(null);
            } catch (err) {
                self.debug('init_map::markers::setMap', err.stack);
            }
        }

        this.markers.length = 0;
        this.markers = [];

        for (var e = this.circles.length - 1; e >= 0; e -= 1) {
            try {
                this.circles[e] && this.circles[e].setMap(null);
            } catch (err) {
                self.debug('init_map::circles::setMap', err.stack);
            }
        }

        this.circles.length = 0;
        this.circles = [];

        if (this.o.controls_on_map && this.oMap.controls) {
            this.oMap.controls[this.o.controls_position].forEach(function(element, index) {
                try {
                    self.oMap.controls[this.o.controls_position].removeAt(index);
                } catch (err) {
                    self.debug('init_map::removeAt', err.stack);
                }
            });
        }

        this.oBounds = new google.maps.LatLngBounds();
    };

    //perform the first view of the map
    Maplace.prototype.perform_load = function() {
        //one location
        if (this.ln === 1) {
            if (this.o.map_options.set_center) {
                this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0], this.o.map_options.set_center[1]));

            } else {
                this.oMap.fitBounds(this.oBounds);
                this.ViewOnMap(1);
            }

            this.o.map_options.zoom && this.oMap.setZoom(this.o.map_options.zoom);

        //no locations
        } else if (this.ln === 0) {
            if (this.o.map_options.set_center) {
                this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0], this.o.map_options.set_center[1]));

            } else {
                this.oMap.fitBounds(this.oBounds);
            }

            this.oMap.setZoom(this.o.map_options.zoom || 1);

        //n+ locations
        } else {
            this.oMap.fitBounds(this.oBounds);

            //check the start option
            if (typeof (this.o.start - 0) === 'number' && this.o.start > 0 && this.o.start <= this.ln) {
                this.ViewOnMap(this.o.start);

            //check if set_center exists
            } else if (this.o.map_options.set_center) {
                this.oMap.setCenter(new google.maps.LatLng(this.o.map_options.set_center[0], this.o.map_options.set_center[1]));

            //view all
            } else {
                this.ViewOnMap(this.view_all_key);
            }

            this.o.map_options.zoom && this.oMap.setZoom(this.o.map_options.zoom);
        }
    };

    Maplace.prototype.debug = function(code, msg) {
        this.o.debug && console.log(code, msg);
        return this;
    };


    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////


    //adds a custom menu to the class
    Maplace.prototype.AddControl = function(name, func) {
        if (!name || !func) {
            self.debug('AddControl', 'Missing "name" and "func" callback.');
            return false;
        }
        this.controls[name] = func;
        return this;
    };

    //close the infowindow
    Maplace.prototype.CloseInfoWindow = function() {
        if (this.infowindow && (this.current_index || this.current_index === 0)) {
            this.o.beforeCloseInfowindow(this.current_index, this.o.locations[this.current_index]);
            this.infowindow.close();
            this.infowindow = null;
            this.o.afterCloseInfowindow(this.current_index, this.o.locations[this.current_index]);
        }
        return this;
    };

    //checks if a location has to be in menu
    Maplace.prototype.ShowOnMenu = function(index) {
        if (index === this.view_all_key && this.o.view_all && this.ln > 1) {
            return true;
        }

        index = parseInt(index, 10);
        if (typeof (index - 0) === 'number' && index >= 0 && index < this.ln) {
            var on_menu = this.o.locations[index].on_menu === false ? false : true;
            if (on_menu) {
                return true;
            }
        }

        return false;
    };

    //triggers to show a location in map
    Maplace.prototype.ViewOnMap = function(index) {
        //view all
        if (index === this.view_all_key) {
            this.o.beforeViewAll();
            this.current_index = index;
            if (this.o.locations.length > 0 && this.o.generate_controls && this.current_control && this.current_control.activateCurrent) {
                this.current_control.activateCurrent.apply(this, [index]);
            }
            this.oMap.fitBounds(this.oBounds);
            this.CloseInfoWindow();
            this.o.afterViewAll();

        //specific location
        } else {
            index = parseInt(index, 10);
            if (typeof (index - 0) === 'number' && index > 0 && index <= this.ln) {
                try {
                    google.maps.event.trigger(this.markers[index - 1], 'click');
                } catch (err) {
                    this.debug('ViewOnMap::trigger', err.stack);
                }
            }
        }
        return this;
    };

    //replace current locations
    Maplace.prototype.SetLocations = function(locs, reload) {
        this.o.locations = locs;
        reload && this.Load();
        return this;
    };

    //adds one or more locations to the end of the array
    Maplace.prototype.AddLocations = function(locs, reload) {
        var self = this;

        if ($.isArray(locs)) {
            $.each(locs, function(index, value) {
                self.o.locations.push(value);
            });
        }

        if ($.isPlainObject(locs)) {
            this.o.locations.push(locs);
        }

        reload && this.Load();
        return this;
    };

    //adds a location at the specific index
    Maplace.prototype.AddLocation = function(location, index, reload) {
        var self = this;

        if ($.isPlainObject(location)) {
            this.o.locations.splice(index, 0, location);
        }

        reload && this.Load();
        return this;
    };

    //remove one or more locations
    Maplace.prototype.RemoveLocations = function(locs, reload) {
        var self = this,
            k = 0;

        if ($.isArray(locs)) {
            $.each(locs, function(index, value) {
                if ((value - k) < self.ln) {
                    self.o.locations.splice(value - k, 1);
                }
                k++;
            });
        } else {
            if (locs < this.ln) {
                this.o.locations.splice(locs, 1);
            }
        }

        reload && this.Load();
        return this;
    };

    //check if already initialized with a Load()
    Maplace.prototype.Loaded = function() {
        return this.loaded;
    };

    //loads the options
    Maplace.prototype._init = function() {
        //store the locations length
        this.ln = this.o.locations.length;

        //update all locations with shared
        for (var i = 0; i < this.ln; i++) {
            var common = $.extend({}, this.o.shared);
            this.o.locations[i] = $.extend(common, this.o.locations[i]);
            if (this.o.locations[i].html) {
                this.o.locations[i].html = this.o.locations[i].html.replace('%index', i + 1);
                this.o.locations[i].html = this.o.locations[i].html.replace('%title', (this.o.locations[i].title || ''));
            }
        }

        //store dom references
        this.map_div = $(this.o.map_div);
        this.controls_wrapper = $(this.o.controls_div);
        return this;
    };

    //creates the map and menu
    Maplace.prototype.Load = function(args) {
        $.extend(true, this.o, args);
        args && args.locations && (this.o.locations = args.locations);
        this._init();

        //reset/init google map objects
        this.o.visualRefresh === false ? (google.maps.visualRefresh = false) : (google.maps.visualRefresh = true);
        this.init_map();
        this.create_objMap();

        //add markers
        this.add_markers_to_objMap();

        //generate controls
        if ((this.ln > 1 && this.o.generate_controls) || this.o.force_generate_controls)  {
            this.o.generate_controls = true;
            this.generate_controls();
        } else {
            this.o.generate_controls = false;
        }

        var self = this;

        //first call
        if (!this.loaded) {
            google.maps.event.addListenerOnce(this.oMap, 'idle', function() {
                self.perform_load();
            });

            //add custom listeners
            for (var i in this.o.listeners) {
                if (this.o.listeners.hasOwnProperty(i)) {
                    google.maps.event.addListener(this.oMap, i, this.o.listeners[i]);
                }
            }

        //all other calls
        } else {
            this.perform_load();
        }

        this.loaded = true;

        return this;
    };

    return Maplace;
}));

/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	var drag, state, e;

	/**
	 * Template for status information about drag and touch events.
	 * @private
	 */
	drag = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	};

	/**
	 * Template for some status informations.
	 * @private
	 */
	state = {
		isTouch: false,
		isScrolling: false,
		isSwiping: false,
		direction: false,
		inMotion: false
	};

	/**
	 * Event functions references.
	 * @private
	 */
	e = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	};

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Caches informations about drag and touch events.
		 */
		this.drag = $.extend({}, drag);

		/**
		 * Caches some status informations.
		 * @protected
		 */
		this.state = $.extend({}, state);

		/**
		 * @protected
		 * @todo Must be documented
		 */
		this.e = $.extend({}, e);

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key[0].toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Pipe, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * Update pipe.
	 */
	Owl.Pipe = [ {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var cached = this._clones,
				clones = this.$stage.children('.cloned');

			if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
				this.$stage.children('.cloned').remove();
				this._clones = [];
			}
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var i, n,
				clones = this._clones,
				items = this._items,
				delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

			for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
				if (delta > 0) {
					this.$stage.children().eq(items.length + clones.length - 1).remove();
					clones.pop();
					this.$stage.children().eq(0).remove();
					clones.pop();
				} else {
					clones.push(clones.length / 2);
					this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
					clones.push(items.length - 1 - (clones.length - 1) / 2);
					this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
				}
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = (this.settings.rtl ? 1 : -1),
				width = (this.width() / this.settings.items).toFixed(3),
				coordinate = 0, merge, i, n;

			this._coordinates = [];
			for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
				merge = this._mergers[this.relative(i)];
				merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
				coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

				this._coordinates.push(coordinate);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
				'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
				'padding-left': this.settings.stagePadding || '',
				'padding-right': this.settings.stagePadding || ''
			};

			this.$stage.css(css);

			css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
			css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

			if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
				for (i = 0, n = this._coordinates.length; i < n; i++) {
					css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
					this.$stage.children().eq(i).css(css);
				}
			} else {
				this.$stage.children().css(css);
			}
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current && this.reset(this.$stage.children().index(cache.current));
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

			if (this.settings.center) {
				this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
				this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.trigger('initialize');

		this.$element
			.addClass(this.settings.baseClass)
			.addClass(this.settings.themeClass)
			.toggleClass('owl-rtl', this.settings.rtl);

		// check support
		this.browserSupport();

		if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
				return false;
			}
		}

		this.$element.addClass('owl-loading');

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
			.wrap('<div class="owl-stage-outer">');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// set view width
		this._width = this.$element.width();

		// update view
		this.refresh();

		this.$element.removeClass('owl-loading').addClass('owl-loaded');

		// attach generic events
		this.eventsCall();

		// attach generic events
		this.internalEvents();

		// attach custom control events
		this.addTriggerableEvents();

		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', function(i, c) {
					return c.replace(/\b owl-responsive-\S+/g, '');
				}).addClass('owl-responsive-' + match);
			}
		}

		if (this.settings === null || this._breakpoint !== match) {
			this.trigger('change', { property: { name: 'settings', value: settings } });
			this._breakpoint = match;
			this.settings = settings;
			this.invalidate('settings');
			this.trigger('changed', { property: { name: 'settings', value: this.settings } });
		}
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		// Toggle Center class
		this.$element.toggleClass('owl-center', this.settings.center);

		// if items number is less than in body
		if (this.settings.loop && this._items.length < this.settings.items) {
			this.settings.loop = false;
		}

		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.settings.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		if (this._items.length === 0) {
			return false;
		}

		var start = new Date().getTime();

		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		// hide and show methods helps here to set a proper widths,
		// this prevents scrollbar to be calculated in stage width
		this.$stage.addClass('owl-refresh');

		this.update();

		this.$stage.removeClass('owl-refresh');

		this.state.orientation = window.orientation;

		this.watchVisibility();

		this.trigger('refreshed');
	};

	/**
	 * Save internal event references and add event based functions.
	 * @protected
	 */
	Owl.prototype.eventsCall = function() {
		// Save events references
		this.e._onDragStart = $.proxy(function(e) {
			this.onDragStart(e);
		}, this);
		this.e._onDragMove = $.proxy(function(e) {
			this.onDragMove(e);
		}, this);
		this.e._onDragEnd = $.proxy(function(e) {
			this.onDragEnd(e);
		}, this);
		this.e._onResize = $.proxy(function(e) {
			this.onResize(e);
		}, this);
		this.e._transitionEnd = $.proxy(function(e) {
			this.transitionEnd(e);
		}, this);
		this.e._preventClick = $.proxy(function(e) {
			this.preventClick(e);
		}, this);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (this.trigger('resize').isDefaultPrevented()) {
			return false;
		}

		this._width = this.$element.width();

		this.invalidate('width');

		this.refresh();

		this.trigger('resized');
	};

	/**
	 * Checks for touch/mouse drag event type and add run event handlers.
	 * @protected
	 */
	Owl.prototype.eventsRouter = function(event) {
		var type = event.type;

		if (type === "mousedown" || type === "touchstart") {
			this.onDragStart(event);
		} else if (type === "mousemove" || type === "touchmove") {
			this.onDragMove(event);
		} else if (type === "mouseup" || type === "touchend") {
			this.onDragEnd(event);
		} else if (type === "touchcancel") {
			this.onDragEnd(event);
		}
	};

	/**
	 * Checks for touch/mouse drag options and add necessery event handlers.
	 * @protected
	 */
	Owl.prototype.internalEvents = function() {
		var isTouch = isTouchSupport(),
			isTouchIE = isTouchSupportIE();

		if (this.settings.mouseDrag){
			this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
			this.$stage.on('dragstart', function() { return false });
			this.$stage.get(0).onselectstart = function() { return false };
		} else {
			this.$element.addClass('owl-text-select-on');
		}

		if (this.settings.touchDrag && !isTouchIE){
			this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
		}

		// catch transitionEnd event
		if (this.transitionEndVendor) {
			this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
		}

		// responsive
		if (this.settings.responsive !== false) {
			this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
		}
	};

	/**
	 * Handles touchstart/mousedown event.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var ev, isTouchEvent, pageX, pageY, animatedPos;

		ev = event.originalEvent || event || window.event;

		// prevent right click
		if (ev.which === 3 || this.state.isTouch) {
			return false;
		}

		if (ev.type === 'mousedown') {
			this.$stage.addClass('owl-grab');
		}

		this.trigger('drag');
		this.drag.startTime = new Date().getTime();
		this.speed(0);
		this.state.isTouch = true;
		this.state.isScrolling = false;
		this.state.isSwiping = false;
		this.drag.distance = 0;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// get stage position left
		this.drag.offsetX = this.$stage.position().left;
		this.drag.offsetY = this.$stage.position().top;

		if (this.settings.rtl) {
			this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
				+ this.settings.margin;
		}

		// catch position // ie to fix
		if (this.state.inMotion && this.support3d) {
			animatedPos = this.getTransformProperty();
			this.drag.offsetX = animatedPos;
			this.animate(animatedPos);
			this.state.inMotion = true;
		} else if (this.state.inMotion && !this.support3d) {
			this.state.inMotion = false;
			return false;
		}

		this.drag.startX = pageX - this.drag.offsetX;
		this.drag.startY = pageY - this.drag.offsetY;

		this.drag.start = pageX - this.drag.startX;
		this.drag.targetEl = ev.target || ev.srcElement;
		this.drag.updatedX = this.drag.start;

		// to do/check
		// prevent links and images dragging;
		if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
			this.drag.targetEl.draggable = false;
		}

		$(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
	};

	/**
	 * Handles the touchmove/mousemove events.
	 * @todo Simplify
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

		if (!this.state.isTouch) {
			return;
		}

		if (this.state.isScrolling) {
			return;
		}

		ev = event.originalEvent || event || window.event;

		pageX = getTouches(ev).x;
		pageY = getTouches(ev).y;

		// Drag Direction
		this.drag.currentX = pageX - this.drag.startX;
		this.drag.currentY = pageY - this.drag.startY;
		this.drag.distance = this.drag.currentX - this.drag.offsetX;

		// Check move direction
		if (this.drag.distance < 0) {
			this.state.direction = this.settings.rtl ? 'right' : 'left';
		} else if (this.drag.distance > 0) {
			this.state.direction = this.settings.rtl ? 'left' : 'right';
		}
		// Loop
		if (this.settings.loop) {
			if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
				this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			} else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
				this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
			}
		} else {
			// pull
			minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
			this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
		}

		// Lock browser if swiping horizontal

		if ((this.drag.distance > 8 || this.drag.distance < -8)) {
			if (ev.preventDefault !== undefined) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
			this.state.isSwiping = true;
		}

		this.drag.updatedX = this.drag.currentX;

		// Lock Owl if scrolling
		if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
			this.state.isScrolling = true;
			this.drag.updatedX = this.drag.start;
		}

		this.animate(this.drag.updatedX);
	};

	/**
	 * Handles the touchend/mouseup events.
	 * @protected
	 */
	Owl.prototype.onDragEnd = function(event) {
		var compareTimes, distanceAbs, closest;

		if (!this.state.isTouch) {
			return;
		}

		if (event.type === 'mouseup') {
			this.$stage.removeClass('owl-grab');
		}

		this.trigger('dragged');

		// prevent links and images dragging;
		this.drag.targetEl.removeAttribute("draggable");

		// remove drag event listeners

		this.state.isTouch = false;
		this.state.isScrolling = false;
		this.state.isSwiping = false;

		// to check
		if (this.drag.distance === 0 && this.state.inMotion !== true) {
			this.state.inMotion = false;
			return false;
		}

		// prevent clicks while scrolling

		this.drag.endTime = new Date().getTime();
		compareTimes = this.drag.endTime - this.drag.startTime;
		distanceAbs = Math.abs(this.drag.distance);

		// to test
		if (distanceAbs > 3 || compareTimes > 300) {
			this.removeClick(this.drag.targetEl);
		}

		closest = this.closest(this.drag.updatedX);

		this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
		this.current(closest);
		this.invalidate('position');
		this.update();

		// if pullDrag is off then fire transitionEnd event manually when stick
		// to border
		if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
			this.transitionEnd();
		}

		this.drag.distance = 0;

		$(document).off('.owl.dragEvents');
	};

	/**
	 * Attaches `preventClick` to disable link while swipping.
	 * @protected
	 * @param {HTMLElement} [target] - The target of the `click` event.
	 */
	Owl.prototype.removeClick = function(target) {
		this.drag.targetEl = target;
		$(target).on('click.preventClick', this.e._preventClick);
		// to make sure click is removed:
		window.setTimeout(function() {
			$(target).off('click.preventClick');
		}, 300);
	};

	/**
	 * Suppresses click event.
	 * @protected
	 * @param {Event} ev - The event arguments.
	 */
	Owl.prototype.preventClick = function(ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		$(ev.target).off('click.preventClick');
	};

	/**
	 * Catches stage position while animate (only CSS3).
	 * @protected
	 * @returns
	 */
	Owl.prototype.getTransformProperty = function() {
		var transform, matrix3d;

		transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
		// var transform = this.$stage.css(this.vendorName + 'transform')
		transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
		matrix3d = transform.length === 16;

		return matrix3d !== true ? transform[4] : transform[12];
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate) {
		var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				if (coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = this.state.direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		this.trigger('translate');
		this.state.inMotion = this.speed() > 0;

		if (this.support3d) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (this.state.isTouch) {
			this.$stage.css({
				left: coordinate + 'px'
			});
		} else {
			this.$stage.animate({
				left: coordinate
			}, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
				if (this.state.inMotion) {
					this.transitionEnd();
				}
			}, this));
		}
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} part - The part to invalidate.
	 */
	Owl.prototype.invalidate = function(part) {
		this._invalidated[part] = true;
	}

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position for an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = (relative ? this._items.length : this._items.length + this._clones.length);

		if (!$.isNumeric(position) || n < 1) {
			return undefined;
		}

		if (this._clones.length) {
			position = ((position % n) + n) % n;
		} else {
			position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
		}

		return position;
	};

	/**
	 * Converts an absolute position for an item into a relative position.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position = this.normalize(position);
		position = position - this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var maximum, width, i = 0, coordinate,
			settings = this.settings;

		if (relative) {
			return this._items.length - 1;
		}

		if (!settings.loop && settings.center) {
			maximum = this._items.length - 1;
		} else if (!settings.loop && !settings.center) {
			maximum = this._items.length - settings.items;
		} else if (settings.loop || settings.center) {
			maximum = this._items.length + settings.items;
		} else if (settings.autoWidth || settings.merge) {
			revert = settings.rtl ? 1 : -1;
			width = this.$stage.width() - this.$element.width();
			while (coordinate = this.coordinates(i)) {
				if (coordinate * revert >= width) {
					break;
				}
				maximum = ++i;
			}
		} else {
			throw 'Can not detect maximum absolute position.'
		}

		return maximum;
	};

	/**
	 * Gets the minimum position for an item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		if (relative) {
			return 0;
		}

		return this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var coordinate = null;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
		} else {
			coordinate = this._coordinates[position - 1] || 0;
		}

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		if (this.settings.loop) {
			var distance = position - this.relative(this.current()),
				revert = this.current(),
				before = this.current(),
				after = this.current() + distance,
				direction = before - after < 0 ? true : false,
				items = this._clones.length + this._items.length;

			if (after < this.settings.items && direction === false) {
				revert = before + this._items.length;
				this.reset(revert);
			} else if (after >= items - this.settings.items && direction === true) {
				revert = before - this._items.length;
				this.reset(revert);
			}
			window.clearTimeout(this.e._goToLoop);
			this.e._goToLoop = window.setTimeout($.proxy(function() {
				this.speed(this.duration(this.current(), revert + distance, speed));
				this.current(revert + distance);
				this.update();
			}, this), 30);
		} else {
			this.speed(this.duration(this.current(), position, speed));
			this.current(position);
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.transitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.state.inMotion = false;
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		position = position === undefined ? this._items.length : this.normalize(position, true);

		this.trigger('add', { content: content, position: position });

		if (this._items.length === 0 || position === this._items.length) {
			this.$stage.append(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Adds triggerable events.
	 * @protected
	 */
	Owl.prototype.addTriggerableEvents = function() {
		var handler = $.proxy(function(callback, event) {
			return $.proxy(function(e) {
				if (e.relatedTarget !== this) {
					this.suppress([ event ]);
					callback.apply(this, [].slice.call(arguments, 1));
					this.release([ event ]);
				}
			}, this);
		}, this);

		$.each({
			'next': this.next,
			'prev': this.prev,
			'to': this.to,
			'destroy': this.destroy,
			'refresh': this.refresh,
			'replace': this.replace,
			'add': this.add,
			'remove': this.remove
		}, $.proxy(function(event, callback) {
			this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
		}, this));

	};

	/**
	 * Watches the visibility of the carousel element.
	 * @protected
	 */
	Owl.prototype.watchVisibility = function() {

		// test on zepto
		if (!isElVisible(this.$element.get(0))) {
			this.$element.addClass('owl-hidden');
			window.clearInterval(this.e._checkVisibile);
			this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
		}

		function isElVisible(el) {
			return el.offsetWidth > 0 && el.offsetHeight > 0;
		}

		function checkVisible() {
			if (isElVisible(this.$element.get(0))) {
				this.$element.removeClass('owl-hidden');
				this.refresh();
				window.clearInterval(this.e._checkVisibile);
			}
		}
	};

	/**
	 * Preloads images with auto width.
	 * @protected
	 * @todo Still to test
	 */
	Owl.prototype.preloadAutoWidthImages = function(imgs) {
		var loaded, that, $el, img;

		loaded = 0;
		that = this;
		imgs.each(function(i, el) {
			$el = $(el);
			img = new Image();

			img.onload = function() {
				loaded++;
				$el.attr('src', img.src);
				$el.css('opacity', 1);
				if (loaded >= imgs.length) {
					that.state.imagesLoaded = true;
					that.initialize();
				}
			};

			img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
		});
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		if (this.$element.hasClass(this.settings.themeClass)) {
			this.$element.removeClass(this.settings.themeClass);
		}

		if (this.settings.responsive !== false) {
			$(window).off('resize.owl.carousel');
		}

		if (this.transitionEndVendor) {
			this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		}

		for ( var i in this._plugins) {
			this._plugins[i].destroy();
		}

		if (this.settings.mouseDrag || this.settings.touchDrag) {
			this.$stage.off('mousedown touchstart touchcancel');
			$(document).off('.owl.dragEvents');
			this.$stage.get(0).onselectstart = function() {};
			this.$stage.off('dragstart', function() { return false });
		}

		// remove event handlers in the ".owl.carousel" namespace
		this.$element.off('.owl');

		this.$stage.children('.cloned').remove();
		this.e = null;
		this.$element.removeData('owlCarousel');

		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.unwrap();
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers an public event.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=.owl.carousel] - The event namespace.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].apply(this, event);
			}
		}

		return event;
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	}

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	}

	/**
	 * Checks the availability of some browser features.
	 * @protected
	 */
	Owl.prototype.browserSupport = function() {
		this.support3d = isPerspective();

		if (this.support3d) {
			this.transformVendor = isTransform();

			// take transitionend event name by detecting transition
			var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
			this.transitionEndVendor = endVendors[isTransition()];

			// take vendor name from transform name
			this.vendorName = this.transformVendor.replace(/Transform/i, '');
			this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
		}

		this.state.orientation = window.orientation;
	};

	/**
	 * Get touch/drag coordinats.
	 * @private
	 * @param {event} - mousedown/touchstart event
	 * @returns {object} - Contains X and Y of current mouse/touch position
	 */

	function getTouches(event) {
		if (event.touches !== undefined) {
			return {
				x: event.touches[0].pageX,
				y: event.touches[0].pageY
			};
		}

		if (event.touches === undefined) {
			if (event.pageX !== undefined) {
				return {
					x: event.pageX,
					y: event.pageY
				};
			}

		if (event.pageX === undefined) {
			return {
					x: event.clientX,
					y: event.clientY
				};
			}
		}
	}

	/**
	 * Checks for CSS support.
	 * @private
	 * @param {Array} array - The CSS properties to check for.
	 * @returns {Array} - Contains the supported CSS property name and its index or `false`.
	 */
	function isStyleSupported(array) {
		var p, s, fake = document.createElement('div'), list = array;
		for (p in list) {
			s = list[p];
			if (typeof fake.style[s] !== 'undefined') {
				fake = null;
				return [ s, p ];
			}
		}
		return [ false ];
	}

	/**
	 * Checks for CSS transition support.
	 * @private
	 * @todo Realy bad design
	 * @returns {Number}
	 */
	function isTransition() {
		return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
	}

	/**
	 * Checks for CSS transform support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isTransform() {
		return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
	}

	/**
	 * Checks for CSS perspective support.
	 * @private
	 * @returns {String} The supported property name or false.
	 */
	function isPerspective() {
		return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
	}

	/**
	 * Checks wether touch is supported or not.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupport() {
		return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
	}

	/**
	 * Checks wether touch is supported or not for IE.
	 * @private
	 * @returns {Boolean}
	 */
	function isTouchSupportIE() {
		return window.navigator.msPointerEnabled;
	}

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @public
	 */
	$.fn.owlCarousel = function(options) {
		return this.each(function() {
			if (!$(this).data('owlCarousel')) {
				$(this).data('owlCarousel', new Owl(this, options));
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = ((e.property && e.property.value) || this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position++)), load);
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	}

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
					=== this._core.$stage.children().eq(this._core.current())) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		this._core.$stage.parent()
			.height(this._core.$stage.children().eq(this._core.current()).height())
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * Whether this is in fullscreen or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._fullscreen = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'resize.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.video && !this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
				if (this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var $element = $(e.content).find('.owl-video');
				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {

		var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');

		if (url) {
			id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {

		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} ev - The event arguments.
	 */
	Video.prototype.play = function(ev) {
		this._core.trigger('play', null, 'video');

		if (this._playing) {
			this.stop();
		}

		var target = $(ev.target || ev.srcElement),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html, wrap;

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
				+ video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
				+ '" height="' + height
				+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		}

		item.addClass('owl-video-playing');
		this._playing = item;

		wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
			+ html + '</div>');
		target.after(wrap);
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {

		// if Vimeo Fullscreen mode
		var element = document.fullscreenElement || document.mozFullScreenElement
			|| document.webkitFullscreenElement;

		if (element && $(element).parent().hasClass('owl-video-frame')) {
			this._core.speed(0);
			this._fullscreen = true;
		}

		if (element && this._fullscreen && this._playing) {
			return false;
		}

		// comming back from fullscreen
		if (this._fullscreen) {
			this._fullscreen = false;
			return false;
		}

		// check full screen mode and window orientation
		if (this._playing) {
			if (this._core.state.orientation !== window.orientation) {
				this._core.state.orientation = window.orientation;
				return false;
			}
		}

		return true;
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				this.swapping = e.type == 'translated';
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1 || !this.core.support3d) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}

		if (incoming) {
			next.addClass('animated owl-animated-in')
				.addClass(incoming)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.transitionEnd();
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

		this.handlers = {
			'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
				this.autoplay();
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				this.play(t, s);
			}, this),
			'stop.owl.autoplay': $.proxy(function() {
				this.stop();
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this.core.settings.autoplayHoverPause) {
					this.autoplay();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * @protected
	 * @todo Must be documented.
	 */
	Autoplay.prototype.autoplay = function() {
		if (this.core.settings.autoplay && !this.core.state.videoPlay) {
			window.clearInterval(this.interval);

			this.interval = window.setInterval($.proxy(function() {
				this.play();
			}, this), this.core.settings.autoplayTimeout);
		} else {
			window.clearInterval(this.interval);
		}
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - ...
	 * @param {Number} [speed] - ...
	 * @returns {Boolean|undefined} - ...
	 * @todo Must be documented.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		// if tab is inactive - doesnt work in <IE10
		if (document.hidden === true) {
			return;
		}

		if (this.core.state.isTouch || this.core.state.isScrolling
			|| this.core.state.isSwiping || this.core.state.inMotion) {
			return;
		}

		if (this.core.settings.autoplay === false) {
			window.clearInterval(this.interval);
			return;
		}

		this.core.next(this.core.settings.autoplaySpeed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		window.clearInterval(this.interval);
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this.interval);

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'add.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
				}
			}, this),
			'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
				if (this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'change.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var current = this._core.current(),
							maximum = this._core.maximum(),
							minimum = this._core.minimum();
						e.data = e.property.value > maximum
							? current >= maximum ? minimum : maximum
							: e.property.value < minimum ? maximum : e.property.value;
					}
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function() {
				if (!this._initialized) {
					this.initialize();
					this._initialized = true;
				}
				this._core.trigger('refresh', null, 'navigation');
				this.update();
				this.draw();
				this._core.trigger('refreshed', null, 'navigation');
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	}

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var $container, override,
			options = this._core.settings;

		// create the indicator template
		if (!options.dotsData) {
			this._templates = [ $('<div>')
				.addClass(options.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		// create controls container if needed
		if (!options.navContainer || !options.dotsContainer) {
			this._controls.$container = $('<div>')
				.addClass(options.controlsClass)
				.appendTo(this.$element);
		}

		// create DOM structure for absolute navigation
		this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
			: $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

		this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$indicators)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, options.dotsSpeed);
		}, this));

		// create DOM structure for relative navigation
		$container = options.navContainer ? $(options.navContainer)
			: $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

		this._controls.$next = $('<' + options.navElement + '>');
		this._controls.$previous = this._controls.$next.clone();

		this._controls.$previous
			.addClass(options.navClass[0])
			.html(options.navText[0])
			.hide()
			.prependTo($container)
			.on('click', $.proxy(function(e) {
				this.prev(options.navSpeed);
			}, this));
		this._controls.$next
			.addClass(options.navClass[1])
			.html(options.navText[1])
			.hide()
			.appendTo($container)
			.on('click', $.proxy(function(e) {
				this.next(options.navSpeed);
			}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	}

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			options = this._core.settings,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			size = options.center || options.autoWidth || options.dotData
				? 1 : options.dotsEach || options.items;

		if (options.slideBy !== 'page') {
			options.slideBy = Math.min(options.slideBy, options.items);
		}

		if (options.dots || options.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: i - lower,
						end: i - lower + size - 1
					});
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	}

	/**
	 * Draws the user interface.
	 * @todo The option `dotData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference, i, html = '',
			options = this._core.settings,
			$items = this._core.$stage.children(),
			index = this._core.relative(this._core.current());

		if (options.nav && !options.loop && !options.navRewind) {
			this._controls.$previous.toggleClass('disabled', index <= 0);
			this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
		}

		this._controls.$previous.toggle(options.nav);
		this._controls.$next.toggle(options.nav);

		if (options.dots) {
			difference = this._pages.length - this._controls.$indicators.children().length;

			if (options.dotData && difference !== 0) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) {
					html += this._templates[this._core.relative(i)];
				}
				this._controls.$indicators.html(html);
			} else if (difference > 0) {
				html = new Array(difference + 1).join(this._templates[0]);
				this._controls.$indicators.append(html);
			} else if (difference < 0) {
				this._controls.$indicators.children().slice(difference).remove();
			}

			this._controls.$indicators.find('.active').removeClass('active');
			this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}

		this._controls.$indicators.toggle(options.dots);
	}

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotData
				? 1 : settings.dotsEach || settings.items)
		};
	}

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var index = this._core.relative(this._core.current());
		return $.grep(this._pages, function(o) {
			return o.start <= index && o.end >= index;
		}).pop();
	}

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			options = this._core.settings;

		if (options.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += options.slideBy : position -= options.slideBy;
		}
		return position;
	}

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	}

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	}

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash table for the hashes.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function() {
				if (this._core.settings.startPosition == 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
				this._hashes[hash] = e.content;
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function() {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

			if (!hash) {
				return false;
			}

			this._core.to(position, false, true);
		}, this));
	}

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	}

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	}

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/*!
 * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */

;(function ( $, window, document, undefined ) {

  // Polyfill for requestAnimationFrame
  // via: https://gist.github.com/paulirish/1579671

  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
        || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  }());


  // Parallax Constructor

  function Parallax(element, options) {
    var self = this;

    if (typeof options == 'object') {
      delete options.refresh;
      delete options.render;
      $.extend(this, options);
    }

    this.$element = $(element);

    if (!this.imageSrc && this.$element.is('img')) {
      this.imageSrc = this.$element.attr('src');
    }

    var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

    if (positions.length < 1) {
      positions.push('center');
    }
    if (positions.length == 1) {
      positions.push(positions[0]);
    }

    if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
      positions = [positions[1], positions[0]];
    }

    if (this.positionX != undefined) positions[0] = this.positionX.toLowerCase();
    if (this.positionY != undefined) positions[1] = this.positionY.toLowerCase();

    self.positionX = positions[0];
    self.positionY = positions[1];

    if (this.positionX != 'left' && this.positionX != 'right') {
      if (isNaN(parseInt(this.positionX))) {
        this.positionX = 'center';
      } else {
        this.positionX = parseInt(this.positionX);
      }
    }

    if (this.positionY != 'top' && this.positionY != 'bottom') {
      if (isNaN(parseInt(this.positionY))) {
        this.positionY = 'center';
      } else {
        this.positionY = parseInt(this.positionY);
      }
    }

    this.position =
      this.positionX + (isNaN(this.positionX)? '' : 'px') + ' ' +
      this.positionY + (isNaN(this.positionY)? '' : 'px');

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    if (navigator.userAgent.match(/(Android)/)) {
      if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    this.$mirror = $('<div />').prependTo('body');

    var slider = this.$element.find('>.parallax-slider');
    var sliderExisted = false;

    if (slider.length == 0)
      this.$slider = $('<img />').prependTo(this.$mirror);
    else {
      this.$slider = slider.prependTo(this.$mirror)
      sliderExisted = true;
    }

    this.$mirror.addClass('parallax-mirror').css({
      visibility: 'hidden',
      zIndex: this.zIndex,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    });

    this.$slider.addClass('parallax-slider').one('load', function() {
      if (!self.naturalHeight || !self.naturalWidth) {
        self.naturalHeight = this.naturalHeight || this.height || 1;
        self.naturalWidth  = this.naturalWidth  || this.width  || 1;
      }
      self.aspectRatio = self.naturalWidth / self.naturalHeight;

      Parallax.isSetup || Parallax.setup();
      Parallax.sliders.push(self);
      Parallax.isFresh = false;
      Parallax.requestRender();
    });

    if (!sliderExisted)
      this.$slider[0].src = this.imageSrc;

    if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
      this.$slider.trigger('load');
    }

  };


  // Parallax Instance Methods

  $.extend(Parallax.prototype, {
    speed:    0.2,
    bleed:    0,
    zIndex:   -100,
    iosFix:   true,
    androidFix: true,
    position: 'center',
    overScrollFix: false,

    refresh: function() {
      this.boxWidth        = this.$element.outerWidth();
      this.boxHeight       = this.$element.outerHeight() + this.bleed * 2;
      this.boxOffsetTop    = this.$element.offset().top - this.bleed;
      this.boxOffsetLeft   = this.$element.offset().left;
      this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

      var winHeight = Parallax.winHeight;
      var docHeight = Parallax.docHeight;
      var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
      var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
      var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
      var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;

      if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
        this.imageWidth    = imageHeightMin * this.aspectRatio | 0;
        this.imageHeight   = imageHeightMin;
        this.offsetBaseTop = imageOffsetMin;

        var margin = this.imageWidth - this.boxWidth;

        if (this.positionX == 'left') {
          this.offsetLeft = 0;
        } else if (this.positionX == 'right') {
          this.offsetLeft = - margin;
        } else if (!isNaN(this.positionX)) {
          this.offsetLeft = Math.max(this.positionX, - margin);
        } else {
          this.offsetLeft = - margin / 2 | 0;
        }
      } else {
        this.imageWidth    = this.boxWidth;
        this.imageHeight   = this.boxWidth / this.aspectRatio | 0;
        this.offsetLeft    = 0;

        var margin = this.imageHeight - imageHeightMin;

        if (this.positionY == 'top') {
          this.offsetBaseTop = imageOffsetMin;
        } else if (this.positionY == 'bottom') {
          this.offsetBaseTop = imageOffsetMin - margin;
        } else if (!isNaN(this.positionY)) {
          this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, - margin);
        } else {
          this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
        }
      }
    },

    render: function() {
      var scrollTop    = Parallax.scrollTop;
      var scrollLeft   = Parallax.scrollLeft;
      var overScroll   = this.overScrollFix ? Parallax.overScroll : 0;
      var scrollBottom = scrollTop + Parallax.winHeight;

      if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
        this.visibility = 'visible';
        this.mirrorTop = this.boxOffsetTop  - scrollTop;
        this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
        this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
      } else {
        this.visibility = 'hidden';
      }

      this.$mirror.css({
        transform: 'translate3d(0px, 0px, 0px)',
        visibility: this.visibility,
        top: this.mirrorTop - overScroll,
        left: this.mirrorLeft,
        height: this.boxHeight,
        width: this.boxWidth
      });

      this.$slider.css({
        transform: 'translate3d(0px, 0px, 0px)',
        position: 'absolute',
        top: this.offsetTop,
        left: this.offsetLeft,
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: 'none'
      });
    }
  });


  // Parallax Static Methods

  $.extend(Parallax, {
    scrollTop:    0,
    scrollLeft:   0,
    winHeight:    0,
    winWidth:     0,
    docHeight:    1 << 30,
    docWidth:     1 << 30,
    sliders:      [],
    isReady:      false,
    isFresh:      false,
    isBusy:       false,

    setup: function() {
      if (this.isReady) return;

      var $doc = $(document), $win = $(window);

      var loadDimensions = function() {
        Parallax.winHeight = $win.height();
        Parallax.winWidth  = $win.width();
        Parallax.docHeight = $doc.height();
        Parallax.docWidth  = $doc.width();
      };

      var loadScrollPosition = function() {
        var winScrollTop  = $win.scrollTop();
        var scrollTopMax  = Parallax.docHeight - Parallax.winHeight;
        var scrollLeftMax = Parallax.docWidth  - Parallax.winWidth;
        Parallax.scrollTop  = Math.max(0, Math.min(scrollTopMax,  winScrollTop));
        Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
        Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
      };

      $win.on('resize.px.parallax load.px.parallax', function() {
          loadDimensions();
          Parallax.isFresh = false;
          Parallax.requestRender();
        })
        .on('scroll.px.parallax load.px.parallax', function() {
          loadScrollPosition();
          Parallax.requestRender();
        });

      loadDimensions();
      loadScrollPosition();

      this.isReady = true;
    },

    configure: function(options) {
      if (typeof options == 'object') {
        delete options.refresh;
        delete options.render;
        $.extend(this.prototype, options);
      }
    },

    refresh: function() {
      $.each(this.sliders, function(){ this.refresh() });
      this.isFresh = true;
    },

    render: function() {
      this.isFresh || this.refresh();
      $.each(this.sliders, function(){ this.render() });
    },

    requestRender: function() {
      var self = this;

      if (!this.isBusy) {
        this.isBusy = true;
        window.requestAnimationFrame(function() {
          self.render();
          self.isBusy = false;
        });
      }
    },
    destroy: function(el){
      var i,
          parallaxElement = $(el).data('px.parallax');
      parallaxElement.$mirror.remove();
      for(i=0; i < this.sliders.length; i+=1){
        if(this.sliders[i] == parallaxElement){
          this.sliders.splice(i, 1);
        }
      }
      $(el).data('px.parallax', false);
      if(this.sliders.length === 0){
        $(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
        this.isReady = false;
        Parallax.isSetup = false;
      }
    }
  });


  // Parallax Plugin Definition

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = typeof option == 'object' && option;

      if (this == window || this == document || $this.is('body')) {
        Parallax.configure(options);
      }
      else if (!$this.data('px.parallax')) {
        options = $.extend({}, $this.data(), options);
        $this.data('px.parallax', new Parallax(this, options));
      }
      else if (typeof option == 'object')
      {
        $.extend($this.data('px.parallax'), options);
      }
      if (typeof option == 'string') {
        if(option == 'destroy'){
            Parallax['destroy'](this);
        }else{
          Parallax[option]();
        }
      }
    })
  };

  var old = $.fn.parallax;

  $.fn.parallax             = Plugin;
  $.fn.parallax.Constructor = Parallax;


  // Parallax No Conflict

  $.fn.parallax.noConflict = function () {
    $.fn.parallax = old;
    return this;
  };


  // Parallax Data-API

  $(document).on('ready.px.parallax.data-api', function () {
    $('[data-parallax="scroll"]').parallax();
  });

}(jQuery, window, document));

/**
* Detect Element Resize Plugin for jQuery
*
* https://github.com/sdecima/javascript-detect-element-resize
* Sebastian Decima
*
* version: 0.5.3
**/

(function ( $ ) {
	var attachEvent = document.attachEvent,
		stylesCreated = false;
	
	var jQuery_resize = $.fn.resize;
	
	$.fn.resize = function(callback) {
		return this.each(function() {
			if(this == window)
				jQuery_resize.call(jQuery(this), callback);
			else
				addResizeListener(this, callback);
		});
	}

	$.fn.removeResize = function(callback) {
		return this.each(function() {
			removeResizeListener(this, callback);
		});
	}
	
	if (!attachEvent) {
		var requestFrame = (function(){
			var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
								function(fn){ return window.setTimeout(fn, 20); };
			return function(fn){ return raf(fn); };
		})();
		
		var cancelFrame = (function(){
			var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
								   window.clearTimeout;
		  return function(id){ return cancel(id); };
		})();

		function resetTriggers(element){
			var triggers = element.__resizeTriggers__,
				expand = triggers.firstElementChild,
				contract = triggers.lastElementChild,
				expandChild = expand.firstElementChild;
			contract.scrollLeft = contract.scrollWidth;
			contract.scrollTop = contract.scrollHeight;
			expandChild.style.width = expand.offsetWidth + 1 + 'px';
			expandChild.style.height = expand.offsetHeight + 1 + 'px';
			expand.scrollLeft = expand.scrollWidth;
			expand.scrollTop = expand.scrollHeight;
		};

		function checkTriggers(element){
			return element.offsetWidth != element.__resizeLast__.width ||
						 element.offsetHeight != element.__resizeLast__.height;
		}
		
		function scrollListener(e){
			var element = this;
			resetTriggers(this);
			if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
			this.__resizeRAF__ = requestFrame(function(){
				if (checkTriggers(element)) {
					element.__resizeLast__.width = element.offsetWidth;
					element.__resizeLast__.height = element.offsetHeight;
					element.__resizeListeners__.forEach(function(fn){
						fn.call(element, e);
					});
				}
			});
		};
		
		/* Detect CSS Animations support to detect element display/re-attach */
		var animation = false,
			animationstring = 'animation',
			keyframeprefix = '',
			animationstartevent = 'animationstart',
			domPrefixes = 'Webkit Moz O ms'.split(' '),
			startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
			pfx  = '';
		{
			var elm = document.createElement('fakeelement');
			if( elm.style.animationName !== undefined ) { animation = true; }    
			
			if( animation === false ) {
				for( var i = 0; i < domPrefixes.length; i++ ) {
					if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
						pfx = domPrefixes[ i ];
						animationstring = pfx + 'Animation';
						keyframeprefix = '-' + pfx.toLowerCase() + '-';
						animationstartevent = startEvents[ i ];
						animation = true;
						break;
					}
				}
			}
		}
		
		var animationName = 'resizeanim';
		var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
		var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
	}
	
	function createStyles() {
		if (!stylesCreated) {
			//opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
			var css = (animationKeyframes ? animationKeyframes : '') +
					'.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' +
					'.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
				head = document.head || document.getElementsByTagName('head')[0],
				style = document.createElement('style');
			
			style.type = 'text/css';
			if (style.styleSheet) {
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}

			head.appendChild(style);
			stylesCreated = true;
		}
	}
	
	window.addResizeListener = function(element, fn){
		if (attachEvent) element.attachEvent('onresize', fn);
		else {
			if (!element.__resizeTriggers__) {
				if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
				createStyles();
				element.__resizeLast__ = {};
				element.__resizeListeners__ = [];
				(element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
				element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' +
																						'<div class="contract-trigger"></div>';
				element.appendChild(element.__resizeTriggers__);
				resetTriggers(element);
				element.addEventListener('scroll', scrollListener, true);
				
				/* Listen for a css animation to detect element display/re-attach */
				animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function(e) {
					if(e.animationName == animationName)
						resetTriggers(element);
				});
			}
			element.__resizeListeners__.push(fn);
		}
	};
	
	window.removeResizeListener = function(element, fn){
		if (attachEvent) element.detachEvent('onresize', fn);
		else {
			element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
			if (!element.__resizeListeners__.length) {
					element.removeEventListener('scroll', scrollListener);
					element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
			}
		}
	}
}( jQuery ));
/*!
 * Shuffle.js by @Vestride
 * Categorize, sort, and filter a responsive grid of items.
 * Dependencies: jQuery 1.9+, Modernizr 2.6.2+
 * @license MIT license
 * @version 3.1.1
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'modernizr'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'), window.Modernizr);
  } else {
    window.Shuffle = factory(window.jQuery, window.Modernizr);
  }
})(function($, Modernizr, undefined) {

'use strict';


// Validate Modernizr exists.
// Shuffle requires `csstransitions`, `csstransforms`, `csstransforms3d`,
// and `prefixed` to exist on the Modernizr object.
if (typeof Modernizr !== 'object') {
  throw new Error('Shuffle.js requires Modernizr.\n' +
      'http://vestride.github.io/Shuffle/#dependencies');
}


/**
 * Returns css prefixed properties like `-webkit-transition` or `box-sizing`
 * from `transition` or `boxSizing`, respectively.
 * @param {(string|boolean)} prop Property to be prefixed.
 * @return {string} The prefixed css property.
 */
function dashify( prop ) {
  if (!prop) {
    return '';
  }

  // Replace upper case with dash-lowercase,
  // then fix ms- prefixes because they're not capitalized.
  return prop.replace(/([A-Z])/g, function( str, m1 ) {
    return '-' + m1.toLowerCase();
  }).replace(/^ms-/,'-ms-');
}

// Constant, prefixed variables.
var TRANSITION = Modernizr.prefixed('transition');
var TRANSITION_DELAY = Modernizr.prefixed('transitionDelay');
var TRANSITION_DURATION = Modernizr.prefixed('transitionDuration');

// Note(glen): Stock Android 4.1.x browser will fail here because it wrongly
// says it supports non-prefixed transitions.
// https://github.com/Modernizr/Modernizr/issues/897
var TRANSITIONEND = {
  'WebkitTransition' : 'webkitTransitionEnd',
  'transition' : 'transitionend'
}[ TRANSITION ];

var TRANSFORM = Modernizr.prefixed('transform');
var CSS_TRANSFORM = dashify(TRANSFORM);

// Constants
var CAN_TRANSITION_TRANSFORMS = Modernizr.csstransforms && Modernizr.csstransitions;
var HAS_TRANSFORMS_3D = Modernizr.csstransforms3d;
var HAS_COMPUTED_STYLE = !!window.getComputedStyle;
var SHUFFLE = 'shuffle';

// Configurable. You can change these constants to fit your application.
// The default scale and concealed scale, however, have to be different values.
var ALL_ITEMS = 'all';
var FILTER_ATTRIBUTE_KEY = 'groups';
var DEFAULT_SCALE = 1;
var CONCEALED_SCALE = 0.001;

// Underscore's throttle function.
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  options = options || {};
  var later = function() {
    previous = options.leading === false ? 0 : $.now();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function() {
    var now = $.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

function each(obj, iterator, context) {
  for (var i = 0, length = obj.length; i < length; i++) {
    if (iterator.call(context, obj[i], i, obj) === {}) {
      return;
    }
  }
}

function defer(fn, context, wait) {
  return setTimeout( $.proxy( fn, context ), wait );
}

function arrayMax( array ) {
  return Math.max.apply( Math, array );
}

function arrayMin( array ) {
  return Math.min.apply( Math, array );
}


/**
 * Always returns a numeric value, given a value.
 * @param {*} value Possibly numeric value.
 * @return {number} `value` or zero if `value` isn't numeric.
 * @private
 */
function getNumber(value) {
  return $.isNumeric(value) ? value : 0;
}

var getStyles = window.getComputedStyle || function() {};

/**
 * Represents a coordinate pair.
 * @param {number} [x=0] X.
 * @param {number} [y=0] Y.
 */
var Point = function(x, y) {
  this.x = getNumber( x );
  this.y = getNumber( y );
};


/**
 * Whether two points are equal.
 * @param {Point} a Point A.
 * @param {Point} b Point B.
 * @return {boolean}
 */
Point.equals = function(a, b) {
  return a.x === b.x && a.y === b.y;
};

var COMPUTED_SIZE_INCLUDES_PADDING = (function() {
  if (!HAS_COMPUTED_STYLE) {
    return false;
  }

  var parent = document.body || document.documentElement;
  var e = document.createElement('div');
  e.style.cssText = 'width:10px;padding:2px;' +
    '-webkit-box-sizing:border-box;box-sizing:border-box;';
  parent.appendChild(e);

  var width = getStyles(e, null).width;
  var ret = width === '10px';

  parent.removeChild(e);

  return ret;
}());


// Used for unique instance variables
var id = 0;
var $window = $( window );


/**
 * Categorize, sort, and filter a responsive grid of items.
 *
 * @param {Element} element An element which is the parent container for the grid items.
 * @param {Object} [options=Shuffle.options] Options object.
 * @constructor
 */
var Shuffle = function( element, options ) {
  options = options || {};
  $.extend( this, Shuffle.options, options, Shuffle.settings );

  this.$el = $(element);
  this.element = element;
  this.unique = 'shuffle_' + id++;

  this._fire( Shuffle.EventType.LOADING );
  this._init();

  // Dispatch the done event asynchronously so that people can bind to it after
  // Shuffle has been initialized.
  defer(function() {
    this.initialized = true;
    this._fire( Shuffle.EventType.DONE );
  }, this, 16);
};


/**
 * Events the container element emits with the .shuffle namespace.
 * For example, "done.shuffle".
 * @enum {string}
 */
Shuffle.EventType = {
  LOADING: 'loading',
  DONE: 'done',
  LAYOUT: 'layout',
  REMOVED: 'removed'
};


/** @enum {string} */
Shuffle.ClassName = {
  BASE: SHUFFLE,
  SHUFFLE_ITEM: 'shuffle-item',
  FILTERED: 'filtered',
  CONCEALED: 'concealed'
};


// Overrideable options
Shuffle.options = {
  group: ALL_ITEMS, // Initial filter group.
  speed: 250, // Transition/animation speed (milliseconds).
  easing: 'ease-out', // CSS easing function to use.
  itemSelector: '', // e.g. '.picture-item'.
  sizer: null, // Sizer element. Use an element to determine the size of columns and gutters.
  gutterWidth: 0, // A static number or function that tells the plugin how wide the gutters between columns are (in pixels).
  columnWidth: 0, // A static number or function that returns a number which tells the plugin how wide the columns are (in pixels).
  delimeter: null, // If your group is not json, and is comma delimeted, you could set delimeter to ','.
  buffer: 0, // Useful for percentage based heights when they might not always be exactly the same (in pixels).
  columnThreshold: HAS_COMPUTED_STYLE ? 0.01 : 0.1, // Reading the width of elements isn't precise enough and can cause columns to jump between values.
  initialSort: null, // Shuffle can be initialized with a sort object. It is the same object given to the sort method.
  throttle: throttle, // By default, shuffle will throttle resize events. This can be changed or removed.
  throttleTime: 300, // How often shuffle can be called on resize (in milliseconds).
  sequentialFadeDelay: 150, // Delay between each item that fades in when adding items.
  supported: CAN_TRANSITION_TRANSFORMS // Whether to use transforms or absolute positioning.
};


// Not overrideable
Shuffle.settings = {
  useSizer: false,
  itemCss : { // default CSS for each item
    position: 'absolute',
    top: 0,
    left: 0,
    visibility: 'visible'
  },
  revealAppendedDelay: 300,
  lastSort: {},
  lastFilter: ALL_ITEMS,
  enabled: true,
  destroyed: false,
  initialized: false,
  _animations: [],
  _transitions: [],
  _isMovementCanceled: false,
  styleQueue: []
};


// Expose for testing.
Shuffle.Point = Point;


/**
 * Static methods.
 */

/**
 * If the browser has 3d transforms available, build a string with those,
 * otherwise use 2d transforms.
 * @param {Point} point X and Y positions.
 * @param {number} scale Scale amount.
 * @return {string} A normalized string which can be used with the transform style.
 * @private
 */
Shuffle._getItemTransformString = function(point, scale) {
  if ( HAS_TRANSFORMS_3D ) {
    return 'translate3d(' + point.x + 'px, ' + point.y + 'px, 0) scale3d(' + scale + ', ' + scale + ', 1)';
  } else {
    return 'translate(' + point.x + 'px, ' + point.y + 'px) scale(' + scale + ')';
  }
};


/**
 * Retrieve the computed style for an element, parsed as a float.
 * @param {Element} element Element to get style for.
 * @param {string} style Style property.
 * @param {CSSStyleDeclaration} [styles] Optionally include clean styles to
 *     use instead of asking for them again.
 * @return {number} The parsed computed value or zero if that fails because IE
 *     will return 'auto' when the element doesn't have margins instead of
 *     the computed style.
 * @private
 */
Shuffle._getNumberStyle = function( element, style, styles ) {
  if ( HAS_COMPUTED_STYLE ) {
    styles = styles || getStyles( element, null );
    var value = Shuffle._getFloat( styles[ style ] );

    // Support IE<=11 and W3C spec.
    if ( !COMPUTED_SIZE_INCLUDES_PADDING && style === 'width' ) {
      value += Shuffle._getFloat( styles.paddingLeft ) +
        Shuffle._getFloat( styles.paddingRight ) +
        Shuffle._getFloat( styles.borderLeftWidth ) +
        Shuffle._getFloat( styles.borderRightWidth );
    } else if ( !COMPUTED_SIZE_INCLUDES_PADDING && style === 'height' ) {
      value += Shuffle._getFloat( styles.paddingTop ) +
        Shuffle._getFloat( styles.paddingBottom ) +
        Shuffle._getFloat( styles.borderTopWidth ) +
        Shuffle._getFloat( styles.borderBottomWidth );
    }

    return value;
  } else {
    return Shuffle._getFloat( $( element ).css( style )  );
  }
};


/**
 * Parse a string as an float.
 * @param {string} value String float.
 * @return {number} The string as an float or zero.
 * @private
 */
Shuffle._getFloat = function(value) {
  return getNumber( parseFloat( value ) );
};


/**
 * Returns the outer width of an element, optionally including its margins.
 *
 * There are a few different methods for getting the width of an element, none of
 * which work perfectly for all Shuffle's use cases.
 *
 * 1. getBoundingClientRect() `left` and `right` properties.
 *   - Accounts for transform scaled elements, making it useless for Shuffle
 *   elements which have shrunk.
 * 2. The `offsetWidth` property (or jQuery's CSS).
 *   - This value stays the same regardless of the elements transform property,
 *   however, it does not return subpixel values.
 * 3. getComputedStyle()
 *   - This works great Chrome, Firefox, Safari, but IE<=11 does not include
 *   padding and border when box-sizing: border-box is set, requiring a feature
 *   test and extra work to add the padding back for IE and other browsers which
 *   follow the W3C spec here.
 *
 * @param {Element} element The element.
 * @param {boolean} [includeMargins] Whether to include margins. Default is false.
 * @return {number} The width.
 */
Shuffle._getOuterWidth = function( element, includeMargins ) {
  // Store the styles so that they can be used by others without asking for it again.
  var styles = getStyles( element, null );
  var width = Shuffle._getNumberStyle( element, 'width', styles );

  // Use jQuery here because it uses getComputedStyle internally and is
  // cross-browser. Using the style property of the element will only work
  // if there are inline styles.
  if ( includeMargins ) {
    var marginLeft = Shuffle._getNumberStyle( element, 'marginLeft', styles );
    var marginRight = Shuffle._getNumberStyle( element, 'marginRight', styles );
    width += marginLeft + marginRight;
  }

  return width;
};


/**
 * Returns the outer height of an element, optionally including its margins.
 * @param {Element} element The element.
 * @param {boolean} [includeMargins] Whether to include margins. Default is false.
 * @return {number} The height.
 */
Shuffle._getOuterHeight = function( element, includeMargins ) {
  var styles = getStyles( element, null );
  var height = Shuffle._getNumberStyle( element, 'height', styles );

  if ( includeMargins ) {
    var marginTop = Shuffle._getNumberStyle( element, 'marginTop', styles );
    var marginBottom = Shuffle._getNumberStyle( element, 'marginBottom', styles );
    height += marginTop + marginBottom;
  }

  return height;
};


/**
 * Change a property or execute a function which will not have a transition
 * @param {Element} element DOM element that won't be transitioned
 * @param {Function} callback A function which will be called while transition
 *     is set to 0ms.
 * @param {Object} [context] Optional context for the callback function.
 * @private
 */
Shuffle._skipTransition = function( element, callback, context ) {
  var duration = element.style[ TRANSITION_DURATION ];

  // Set the duration to zero so it happens immediately
  element.style[ TRANSITION_DURATION ] = '0ms'; // ms needed for firefox!

  callback.call( context );

  // Force reflow
  var reflow = element.offsetWidth;
  // Avoid jshint warnings: unused variables and expressions.
  reflow = null;

  // Put the duration back
  element.style[ TRANSITION_DURATION ] = duration;
};


/**
 * Instance methods.
 */

Shuffle.prototype._init = function() {
  this.$items = this._getItems();

  this.sizer = this._getElementOption( this.sizer );

  if ( this.sizer ) {
    this.useSizer = true;
  }

  // Add class and invalidate styles
  this.$el.addClass( Shuffle.ClassName.BASE );

  // Set initial css for each item
  this._initItems();

  // Bind resize events
  // http://stackoverflow.com/questions/1852751/window-resize-event-firing-in-internet-explorer
  $window.on('resize.' + SHUFFLE + '.' + this.unique, this._getResizeFunction());

  // Get container css all in one request. Causes reflow
  var containerCSS = this.$el.css(['position', 'overflow']);
  var containerWidth = Shuffle._getOuterWidth( this.element );

  // Add styles to the container if it doesn't have them.
  this._validateStyles( containerCSS );

  // We already got the container's width above, no need to cause another reflow getting it again...
  // Calculate the number of columns there will be
  this._setColumns( containerWidth );

  // Kick off!
  this.shuffle( this.group, this.initialSort );

  // The shuffle items haven't had transitions set on them yet
  // so the user doesn't see the first layout. Set them now that the first layout is done.
  if ( this.supported ) {
    defer(function() {
      this._setTransitions();
      this.element.style[ TRANSITION ] = 'height ' + this.speed + 'ms ' + this.easing;
    }, this);
  }
};


/**
 * Returns a throttled and proxied function for the resize handler.
 * @return {Function}
 * @private
 */
Shuffle.prototype._getResizeFunction = function() {
  var resizeFunction = $.proxy( this._onResize, this );
  return this.throttle ?
      this.throttle( resizeFunction, this.throttleTime ) :
      resizeFunction;
};


/**
 * Retrieve an element from an option.
 * @param {string|jQuery|Element} option The option to check.
 * @return {?Element} The plain element or null.
 * @private
 */
Shuffle.prototype._getElementOption = function( option ) {
  // If column width is a string, treat is as a selector and search for the
  // sizer element within the outermost container
  if ( typeof option === 'string' ) {
    return this.$el.find( option )[0] || null;

  // Check for an element
  } else if ( option && option.nodeType && option.nodeType === 1 ) {
    return option;

  // Check for jQuery object
  } else if ( option && option.jquery ) {
    return option[0];
  }

  return null;
};


/**
 * Ensures the shuffle container has the css styles it needs applied to it.
 * @param {Object} styles Key value pairs for position and overflow.
 * @private
 */
Shuffle.prototype._validateStyles = function(styles) {
  // Position cannot be static.
  if ( styles.position === 'static' ) {
    this.element.style.position = 'relative';
  }

  // Overflow has to be hidden
  if ( styles.overflow !== 'hidden' ) {
    this.element.style.overflow = 'hidden';
  }
};


/**
 * Filter the elements by a category.
 * @param {string} [category] Category to filter by. If it's given, the last
 *     category will be used to filter the items.
 * @param {ArrayLike} [$collection] Optionally filter a collection. Defaults to
 *     all the items.
 * @return {jQuery} Filtered items.
 * @private
 */
Shuffle.prototype._filter = function( category, $collection ) {
  category = category || this.lastFilter;
  $collection = $collection || this.$items;

  var set = this._getFilteredSets( category, $collection );

  // Individually add/remove concealed/filtered classes
  this._toggleFilterClasses( set.filtered, set.concealed );

  // Save the last filter in case elements are appended.
  this.lastFilter = category;

  // This is saved mainly because providing a filter function (like searching)
  // will overwrite the `lastFilter` property every time its called.
  if ( typeof category === 'string' ) {
    this.group = category;
  }

  return set.filtered;
};


/**
 * Returns an object containing the filtered and concealed elements.
 * @param {string|Function} category Category or function to filter by.
 * @param {ArrayLike.<Element>} $items A collection of items to filter.
 * @return {!{filtered: jQuery, concealed: jQuery}}
 * @private
 */
Shuffle.prototype._getFilteredSets = function( category, $items ) {
  var $filtered = $();
  var $concealed = $();

  // category === 'all', add filtered class to everything
  if ( category === ALL_ITEMS ) {
    $filtered = $items;

  // Loop through each item and use provided function to determine
  // whether to hide it or not.
  } else {
    each($items, function( el ) {
      var $item = $(el);
      if ( this._doesPassFilter( category, $item ) ) {
        $filtered = $filtered.add( $item );
      } else {
        $concealed = $concealed.add( $item );
      }
    }, this);
  }

  return {
    filtered: $filtered,
    concealed: $concealed
  };
};


/**
 * Test an item to see if it passes a category.
 * @param {string|Function} category Category or function to filter by.
 * @param {jQuery} $item A single item, wrapped with jQuery.
 * @return {boolean} Whether it passes the category/filter.
 * @private
 */
Shuffle.prototype._doesPassFilter = function( category, $item ) {
  if ( $.isFunction( category ) ) {
    return category.call( $item[0], $item, this );

  // Check each element's data-groups attribute against the given category.
  } else {
    var groups = $item.data( FILTER_ATTRIBUTE_KEY );
    var keys = this.delimeter && !$.isArray( groups ) ?
        groups.split( this.delimeter ) :
        groups;
    return $.inArray(category, keys) > -1;
  }
};


/**
 * Toggles the filtered and concealed class names.
 * @param {jQuery} $filtered Filtered set.
 * @param {jQuery} $concealed Concealed set.
 * @private
 */
Shuffle.prototype._toggleFilterClasses = function( $filtered, $concealed ) {
  $filtered
    .removeClass( Shuffle.ClassName.CONCEALED )
    .addClass( Shuffle.ClassName.FILTERED );
  $concealed
    .removeClass( Shuffle.ClassName.FILTERED )
    .addClass( Shuffle.ClassName.CONCEALED );
};


/**
 * Set the initial css for each item
 * @param {jQuery} [$items] Optionally specifiy at set to initialize
 */
Shuffle.prototype._initItems = function( $items ) {
  $items = $items || this.$items;
  $items.addClass([
    Shuffle.ClassName.SHUFFLE_ITEM,
    Shuffle.ClassName.FILTERED
  ].join(' '));
  $items.css( this.itemCss ).data('point', new Point()).data('scale', DEFAULT_SCALE);
};


/**
 * Updates the filtered item count.
 * @private
 */
Shuffle.prototype._updateItemCount = function() {
  this.visibleItems = this._getFilteredItems().length;
};


/**
 * Sets css transform transition on a an element.
 * @param {Element} element Element to set transition on.
 * @private
 */
Shuffle.prototype._setTransition = function( element ) {
  element.style[ TRANSITION ] = CSS_TRANSFORM + ' ' + this.speed + 'ms ' +
    this.easing + ', opacity ' + this.speed + 'ms ' + this.easing;
};


/**
 * Sets css transform transition on a group of elements.
 * @param {ArrayLike.<Element>} $items Elements to set transitions on.
 * @private
 */
Shuffle.prototype._setTransitions = function( $items ) {
  $items = $items || this.$items;
  each($items, function( el ) {
    this._setTransition( el );
  }, this);
};


/**
 * Sets a transition delay on a collection of elements, making each delay
 * greater than the last.
 * @param {ArrayLike.<Element>} $collection Array to iterate over.
 */
Shuffle.prototype._setSequentialDelay = function( $collection ) {
  if ( !this.supported ) {
    return;
  }

  // $collection can be an array of dom elements or jquery object
  each($collection, function( el, i ) {
    // This works because the transition-property: transform, opacity;
    el.style[ TRANSITION_DELAY ] = '0ms,' + ((i + 1) * this.sequentialFadeDelay) + 'ms';
  }, this);
};


Shuffle.prototype._getItems = function() {
  return this.$el.children( this.itemSelector );
};


Shuffle.prototype._getFilteredItems = function() {
  return this.$items.filter('.' + Shuffle.ClassName.FILTERED);
};


Shuffle.prototype._getConcealedItems = function() {
  return this.$items.filter('.' + Shuffle.ClassName.CONCEALED);
};


/**
 * Returns the column size, based on column width and sizer options.
 * @param {number} containerWidth Size of the parent container.
 * @param {number} gutterSize Size of the gutters.
 * @return {number}
 * @private
 */
Shuffle.prototype._getColumnSize = function( containerWidth, gutterSize ) {
  var size;

  // If the columnWidth property is a function, then the grid is fluid
  if ( $.isFunction( this.columnWidth ) ) {
    size = this.columnWidth(containerWidth);

  // columnWidth option isn't a function, are they using a sizing element?
  } else if ( this.useSizer ) {
    size = Shuffle._getOuterWidth(this.sizer);

  // if not, how about the explicitly set option?
  } else if ( this.columnWidth ) {
    size = this.columnWidth;

  // or use the size of the first item
  } else if ( this.$items.length > 0 ) {
    size = Shuffle._getOuterWidth(this.$items[0], true);

  // if there's no items, use size of container
  } else {
    size = containerWidth;
  }

  // Don't let them set a column width of zero.
  if ( size === 0 ) {
    size = containerWidth;
  }

  return size + gutterSize;
};


/**
 * Returns the gutter size, based on gutter width and sizer options.
 * @param {number} containerWidth Size of the parent container.
 * @return {number}
 * @private
 */
Shuffle.prototype._getGutterSize = function( containerWidth ) {
  var size;
  if ( $.isFunction( this.gutterWidth ) ) {
    size = this.gutterWidth(containerWidth);
  } else if ( this.useSizer ) {
    size = Shuffle._getNumberStyle(this.sizer, 'marginLeft');
  } else {
    size = this.gutterWidth;
  }

  return size;
};


/**
 * Calculate the number of columns to be used. Gets css if using sizer element.
 * @param {number} [theContainerWidth] Optionally specify a container width if it's already available.
 */
Shuffle.prototype._setColumns = function( theContainerWidth ) {
  var containerWidth = theContainerWidth || Shuffle._getOuterWidth( this.element );
  var gutter = this._getGutterSize( containerWidth );
  var columnWidth = this._getColumnSize( containerWidth, gutter );
  var calculatedColumns = (containerWidth + gutter) / columnWidth;

  // Widths given from getStyles are not precise enough...
  if ( Math.abs(Math.round(calculatedColumns) - calculatedColumns) < this.columnThreshold ) {
    // e.g. calculatedColumns = 11.998876
    calculatedColumns = Math.round( calculatedColumns );
  }

  this.cols = Math.max( Math.floor(calculatedColumns), 1 );
  this.containerWidth = containerWidth;
  this.colWidth = columnWidth;
};

/**
 * Adjust the height of the grid
 */
Shuffle.prototype._setContainerSize = function() {
  this.$el.css( 'height', this._getContainerSize() );
};


/**
 * Based on the column heights, it returns the biggest one.
 * @return {number}
 * @private
 */
Shuffle.prototype._getContainerSize = function() {
  return arrayMax( this.positions );
};


/**
 * Fire events with .shuffle namespace
 */
Shuffle.prototype._fire = function( name, args ) {
  this.$el.trigger( name + '.' + SHUFFLE, args && args.length ? args : [ this ] );
};


/**
 * Zeros out the y columns array, which is used to determine item placement.
 * @private
 */
Shuffle.prototype._resetCols = function() {
  var i = this.cols;
  this.positions = [];
  while (i--) {
    this.positions.push( 0 );
  }
};


/**
 * Loops through each item that should be shown and calculates the x, y position.
 * @param {Array.<Element>} items Array of items that will be shown/layed out in order in their array.
 *     Because jQuery collection are always ordered in DOM order, we can't pass a jq collection.
 * @param {boolean} [isOnlyPosition=false] If true this will position the items with zero opacity.
 */
Shuffle.prototype._layout = function( items, isOnlyPosition ) {
  each(items, function( item ) {
    this._layoutItem( item, !!isOnlyPosition );
  }, this);

  // `_layout` always happens after `_shrink`, so it's safe to process the style
  // queue here with styles from the shrink method.
  this._processStyleQueue();

  // Adjust the height of the container.
  this._setContainerSize();
};


/**
 * Calculates the position of the item and pushes it onto the style queue.
 * @param {Element} item Element which is being positioned.
 * @param {boolean} isOnlyPosition Whether to position the item, but with zero
 *     opacity so that it can fade in later.
 * @private
 */
Shuffle.prototype._layoutItem = function( item, isOnlyPosition ) {
  var $item = $(item);
  var itemData = $item.data();
  var currPos = itemData.point;
  var currScale = itemData.scale;
  var itemSize = {
    width: Shuffle._getOuterWidth( item, true ),
    height: Shuffle._getOuterHeight( item, true )
  };
  var pos = this._getItemPosition( itemSize );

  // If the item will not change its position, do not add it to the render
  // queue. Transitions don't fire when setting a property to the same value.
  if ( Point.equals(currPos, pos) && currScale === DEFAULT_SCALE ) {
    return;
  }

  // Save data for shrink
  itemData.point = pos;
  itemData.scale = DEFAULT_SCALE;

  this.styleQueue.push({
    $item: $item,
    point: pos,
    scale: DEFAULT_SCALE,
    opacity: isOnlyPosition ? 0 : 1,
    // Set styles immediately if there is no transition speed.
    skipTransition: isOnlyPosition || this.speed === 0,
    callfront: function() {
      if ( !isOnlyPosition ) {
        $item.css( 'visibility', 'visible' );
      }
    },
    callback: function() {
      if ( isOnlyPosition ) {
        $item.css( 'visibility', 'hidden' );
      }
    }
  });
};


/**
 * Determine the location of the next item, based on its size.
 * @param {{width: number, height: number}} itemSize Object with width and height.
 * @return {Point}
 * @private
 */
Shuffle.prototype._getItemPosition = function( itemSize ) {
  var columnSpan = this._getColumnSpan( itemSize.width, this.colWidth, this.cols );

  var setY = this._getColumnSet( columnSpan, this.cols );

  // Finds the index of the smallest number in the set.
  var shortColumnIndex = this._getShortColumn( setY, this.buffer );

  // Position the item
  var point = new Point(
    Math.round( this.colWidth * shortColumnIndex ),
    Math.round( setY[shortColumnIndex] ));

  // Update the columns array with the new values for each column.
  // e.g. before the update the columns could be [250, 0, 0, 0] for an item
  // which spans 2 columns. After it would be [250, itemHeight, itemHeight, 0].
  var setHeight = setY[shortColumnIndex] + itemSize.height;
  var setSpan = this.cols + 1 - setY.length;
  for ( var i = 0; i < setSpan; i++ ) {
    this.positions[ shortColumnIndex + i ] = setHeight;
  }

  return point;
};


/**
 * Determine the number of columns an items spans.
 * @param {number} itemWidth Width of the item.
 * @param {number} columnWidth Width of the column (includes gutter).
 * @param {number} columns Total number of columns
 * @return {number}
 * @private
 */
Shuffle.prototype._getColumnSpan = function( itemWidth, columnWidth, columns ) {
  var columnSpan = itemWidth / columnWidth;

  // If the difference between the rounded column span number and the
  // calculated column span number is really small, round the number to
  // make it fit.
  if ( Math.abs(Math.round( columnSpan ) - columnSpan ) < this.columnThreshold ) {
    // e.g. columnSpan = 4.0089945390298745
    columnSpan = Math.round( columnSpan );
  }

  // Ensure the column span is not more than the amount of columns in the whole layout.
  return Math.min( Math.ceil( columnSpan ), columns );
};


/**
 * Retrieves the column set to use for placement.
 * @param {number} columnSpan The number of columns this current item spans.
 * @param {number} columns The total columns in the grid.
 * @return {Array.<number>} An array of numbers represeting the column set.
 * @private
 */
Shuffle.prototype._getColumnSet = function( columnSpan, columns ) {
  // The item spans only one column.
  if ( columnSpan === 1 ) {
    return this.positions;

  // The item spans more than one column, figure out how many different
  // places it could fit horizontally.
  // The group count is the number of places within the positions this block
  // could fit, ignoring the current positions of items.
  // Imagine a 2 column brick as the second item in a 4 column grid with
  // 10px height each. Find the places it would fit:
  // [10, 0, 0, 0]
  //  |   |  |
  //  *   *  *
  //
  // Then take the places which fit and get the bigger of the two:
  // max([10, 0]), max([0, 0]), max([0, 0]) = [10, 0, 0]
  //
  // Next, find the first smallest number (the short column).
  // [10, 0, 0]
  //      |
  //      *
  //
  // And that's where it should be placed!
  } else {
    var groupCount = columns + 1 - columnSpan;
    var groupY = [];

    // For how many possible positions for this item there are.
    for ( var i = 0; i < groupCount; i++ ) {
      // Find the bigger value for each place it could fit.
      groupY[i] = arrayMax( this.positions.slice( i, i + columnSpan ) );
    }

    return groupY;
  }
};


/**
 * Find index of short column, the first from the left where this item will go.
 *
 * @param {Array.<number>} positions The array to search for the smallest number.
 * @param {number} buffer Optional buffer which is very useful when the height
 *     is a percentage of the width.
 * @return {number} Index of the short column.
 * @private
 */
Shuffle.prototype._getShortColumn = function( positions, buffer ) {
  var minPosition = arrayMin( positions );
  for (var i = 0, len = positions.length; i < len; i++) {
    if ( positions[i] >= minPosition - buffer && positions[i] <= minPosition + buffer ) {
      return i;
    }
  }
  return 0;
};


/**
 * Hides the elements that don't match our filter.
 * @param {jQuery} $collection jQuery collection to shrink.
 * @private
 */
Shuffle.prototype._shrink = function( $collection ) {
  var $concealed = $collection || this._getConcealedItems();

  each($concealed, function( item ) {
    var $item = $(item);
    var itemData = $item.data();

    // Continuing would add a transitionend event listener to the element, but
    // that listener would not execute because the transform and opacity would
    // stay the same.
    if ( itemData.scale === CONCEALED_SCALE ) {
      return;
    }

    itemData.scale = CONCEALED_SCALE;

    this.styleQueue.push({
      $item: $item,
      point: itemData.point,
      scale : CONCEALED_SCALE,
      opacity: 0,
      callback: function() {
        $item.css( 'visibility', 'hidden' );
      }
    });
  }, this);
};


/**
 * Resize handler.
 * @private
 */
Shuffle.prototype._onResize = function() {
  // If shuffle is disabled, destroyed, don't do anything
  if ( !this.enabled || this.destroyed ) {
    return;
  }

  // Will need to check height in the future if it's layed out horizontaly
  var containerWidth = Shuffle._getOuterWidth( this.element );

  // containerWidth hasn't changed, don't do anything
  if ( containerWidth === this.containerWidth ) {
    return;
  }

  this.update();
};


/**
 * Returns styles for either jQuery animate or transition.
 * @param {Object} opts Transition options.
 * @return {!Object} Transforms for transitions, left/top for animate.
 * @private
 */
Shuffle.prototype._getStylesForTransition = function( opts ) {
  var styles = {
    opacity: opts.opacity
  };

  if ( this.supported ) {
    styles[ TRANSFORM ] = Shuffle._getItemTransformString( opts.point, opts.scale );
  } else {
    styles.left = opts.point.x;
    styles.top = opts.point.y;
  }

  return styles;
};


/**
 * Transitions an item in the grid
 *
 * @param {Object} opts options.
 * @param {jQuery} opts.$item jQuery object representing the current item.
 * @param {Point} opts.point A point object with the x and y coordinates.
 * @param {number} opts.scale Amount to scale the item.
 * @param {number} opts.opacity Opacity of the item.
 * @param {Function} opts.callback Complete function for the animation.
 * @param {Function} opts.callfront Function to call before transitioning.
 * @private
 */
Shuffle.prototype._transition = function( opts ) {
  var styles = this._getStylesForTransition( opts );
  this._startItemAnimation( opts.$item, styles, opts.callfront || $.noop, opts.callback || $.noop );
};


Shuffle.prototype._startItemAnimation = function( $item, styles, callfront, callback ) {
  var _this = this;
  // Transition end handler removes its listener.
  function handleTransitionEnd( evt ) {
    // Make sure this event handler has not bubbled up from a child.
    if ( evt.target === evt.currentTarget ) {
      $( evt.target ).off( TRANSITIONEND, handleTransitionEnd );
      _this._removeTransitionReference(reference);
      callback();
    }
  }

  var reference = {
    $element: $item,
    handler: handleTransitionEnd
  };

  callfront();

  // Transitions are not set until shuffle has loaded to avoid the initial transition.
  if ( !this.initialized ) {
    $item.css( styles );
    callback();
    return;
  }

  // Use CSS Transforms if we have them
  if ( this.supported ) {
    $item.css( styles );
    $item.on( TRANSITIONEND, handleTransitionEnd );
    this._transitions.push(reference);

  // Use jQuery to animate left/top
  } else {
    // Save the deferred object which jQuery returns.
    var anim = $item.stop( true ).animate( styles, this.speed, 'swing', callback );
    // Push the animation to the list of pending animations.
    this._animations.push( anim.promise() );
  }
};


/**
 * Execute the styles gathered in the style queue. This applies styles to elements,
 * triggering transitions.
 * @param {boolean} noLayout Whether to trigger a layout event.
 * @private
 */
Shuffle.prototype._processStyleQueue = function( noLayout ) {
  if ( this.isTransitioning ) {
    this._cancelMovement();
  }

  var $transitions = $();

  // Iterate over the queue and keep track of ones that use transitions.
  each(this.styleQueue, function( transitionObj ) {
    if ( transitionObj.skipTransition ) {
      this._styleImmediately( transitionObj );
    } else {
      $transitions = $transitions.add( transitionObj.$item );
      this._transition( transitionObj );
    }
  }, this);


  if ( $transitions.length > 0 && this.initialized && this.speed > 0 ) {
    // Set flag that shuffle is currently in motion.
    this.isTransitioning = true;

    if ( this.supported ) {
      this._whenCollectionDone( $transitions, TRANSITIONEND, this._movementFinished );

    // The _transition function appends a promise to the animations array.
    // When they're all complete, do things.
    } else {
      this._whenAnimationsDone( this._movementFinished );
    }

  // A call to layout happened, but none of the newly filtered items will
  // change position. Asynchronously fire the callback here.
  } else if ( !noLayout ) {
    defer( this._layoutEnd, this );
  }

  // Remove everything in the style queue
  this.styleQueue.length = 0;
};

Shuffle.prototype._cancelMovement = function() {
  if (this.supported) {
    // Remove the transition end event for each listener.
    each(this._transitions, function( transition ) {
      transition.$element.off( TRANSITIONEND, transition.handler );
    });
  } else {
    // Even when `stop` is called on the jQuery animation, its promise will
    // still be resolved. Since it cannot be determine from within that callback
    // whether the animation was stopped or not, a flag is set here to distinguish
    // between the two states.
    this._isMovementCanceled = true;
    this.$items.stop(true);
    this._isMovementCanceled = false;
  }

  // Reset the array.
  this._transitions.length = 0;

  // Show it's no longer active.
  this.isTransitioning = false;
};

Shuffle.prototype._removeTransitionReference = function(ref) {
  var indexInArray = $.inArray(ref, this._transitions);
  if (indexInArray > -1) {
    this._transitions.splice(indexInArray, 1);
  }
};


/**
 * Apply styles without a transition.
 * @param {Object} opts Transitions options object.
 * @private
 */
Shuffle.prototype._styleImmediately = function( opts ) {
  Shuffle._skipTransition(opts.$item[0], function() {
    opts.$item.css( this._getStylesForTransition( opts ) );
  }, this);
};

Shuffle.prototype._movementFinished = function() {
  this.isTransitioning = false;
  this._layoutEnd();
};

Shuffle.prototype._layoutEnd = function() {
  this._fire( Shuffle.EventType.LAYOUT );
};

Shuffle.prototype._addItems = function( $newItems, addToEnd, isSequential ) {
  // Add classes and set initial positions.
  this._initItems( $newItems );

  // Add transition to each item.
  this._setTransitions( $newItems );

  // Update the list of
  this.$items = this._getItems();

  // Shrink all items (without transitions).
  this._shrink( $newItems );
  each(this.styleQueue, function( transitionObj ) {
    transitionObj.skipTransition = true;
  });

  // Apply shrink positions, but do not cause a layout event.
  this._processStyleQueue( true );

  if ( addToEnd ) {
    this._addItemsToEnd( $newItems, isSequential );
  } else {
    this.shuffle( this.lastFilter );
  }
};


Shuffle.prototype._addItemsToEnd = function( $newItems, isSequential ) {
  // Get ones that passed the current filter
  var $passed = this._filter( null, $newItems );
  var passed = $passed.get();

  // How many filtered elements?
  this._updateItemCount();

  this._layout( passed, true );

  if ( isSequential && this.supported ) {
    this._setSequentialDelay( passed );
  }

  this._revealAppended( passed );
};


/**
 * Triggers appended elements to fade in.
 * @param {ArrayLike.<Element>} $newFilteredItems Collection of elements.
 * @private
 */
Shuffle.prototype._revealAppended = function( newFilteredItems ) {
  defer(function() {
    each(newFilteredItems, function( el ) {
      var $item = $( el );
      this._transition({
        $item: $item,
        opacity: 1,
        point: $item.data('point'),
        scale: DEFAULT_SCALE
      });
    }, this);

    this._whenCollectionDone($(newFilteredItems), TRANSITIONEND, function() {
      $(newFilteredItems).css( TRANSITION_DELAY, '0ms' );
      this._movementFinished();
    });
  }, this, this.revealAppendedDelay);
};


/**
 * Execute a function when an event has been triggered for every item in a collection.
 * @param {jQuery} $collection Collection of elements.
 * @param {string} eventName Event to listen for.
 * @param {Function} callback Callback to execute when they're done.
 * @private
 */
Shuffle.prototype._whenCollectionDone = function( $collection, eventName, callback ) {
  var done = 0;
  var items = $collection.length;
  var self = this;

  function handleEventName( evt ) {
    if ( evt.target === evt.currentTarget ) {
      $( evt.target ).off( eventName, handleEventName );
      done++;

      // Execute callback if all items have emitted the correct event.
      if ( done === items ) {
        self._removeTransitionReference(reference);
        callback.call( self );
      }
    }
  }

  var reference = {
    $element: $collection,
    handler: handleEventName
  };

  // Bind the event to all items.
  $collection.on( eventName, handleEventName );

  // Keep track of transitionend events so they can be removed.
  this._transitions.push(reference);
};


/**
 * Execute a callback after jQuery `animate` for a collection has finished.
 * @param {Function} callback Callback to execute when they're done.
 * @private
 */
Shuffle.prototype._whenAnimationsDone = function( callback ) {
  $.when.apply( null, this._animations ).always( $.proxy( function() {
    this._animations.length = 0;
    if (!this._isMovementCanceled) {
      callback.call( this );
    }
  }, this ));
};


/**
 * Public Methods
 */

/**
 * The magic. This is what makes the plugin 'shuffle'
 * @param {string|Function} [category] Category to filter by. Can be a function
 * @param {Object} [sortObj] A sort object which can sort the filtered set
 */
Shuffle.prototype.shuffle = function( category, sortObj ) {
  if ( !this.enabled ) {
    return;
  }

  if ( !category ) {
    category = ALL_ITEMS;
  }

  this._filter( category );

  // How many filtered elements?
  this._updateItemCount();

  // Shrink each concealed item
  this._shrink();

  // Update transforms on .filtered elements so they will animate to their new positions
  this.sort( sortObj );
};


/**
 * Gets the .filtered elements, sorts them, and passes them to layout.
 * @param {Object} opts the options object for the sorted plugin
 */
Shuffle.prototype.sort = function( opts ) {
  if ( this.enabled ) {
    this._resetCols();

    var sortOptions = opts || this.lastSort;
    var items = this._getFilteredItems().sorted( sortOptions );

    this._layout( items );

    this.lastSort = sortOptions;
  }
};


/**
 * Reposition everything.
 * @param {boolean} isOnlyLayout If true, column and gutter widths won't be
 *     recalculated.
 */
Shuffle.prototype.update = function( isOnlyLayout ) {
  if ( this.enabled ) {

    if ( !isOnlyLayout ) {
      // Get updated colCount
      this._setColumns();
    }

    // Layout items
    this.sort();
  }
};


/**
 * Use this instead of `update()` if you don't need the columns and gutters updated
 * Maybe an image inside `shuffle` loaded (and now has a height), which means calculations
 * could be off.
 */
Shuffle.prototype.layout = function() {
  this.update( true );
};


/**
 * New items have been appended to shuffle. Fade them in sequentially
 * @param {jQuery} $newItems jQuery collection of new items
 * @param {boolean} [addToEnd=false] If true, new items will be added to the end / bottom
 *     of the items. If not true, items will be mixed in with the current sort order.
 * @param {boolean} [isSequential=true] If false, new items won't sequentially fade in
 */
Shuffle.prototype.appended = function( $newItems, addToEnd, isSequential ) {
  this._addItems( $newItems, addToEnd === true, isSequential !== false );
};


/**
 * Disables shuffle from updating dimensions and layout on resize
 */
Shuffle.prototype.disable = function() {
  this.enabled = false;
};


/**
 * Enables shuffle again
 * @param {boolean} [isUpdateLayout=true] if undefined, shuffle will update columns and gutters
 */
Shuffle.prototype.enable = function( isUpdateLayout ) {
  this.enabled = true;
  if ( isUpdateLayout !== false ) {
    this.update();
  }
};


/**
 * Remove 1 or more shuffle items
 * @param {jQuery} $collection A jQuery object containing one or more element in shuffle
 * @return {Shuffle} The shuffle object
 */
Shuffle.prototype.remove = function( $collection ) {

  // If this isn't a jquery object, exit
  if ( !$collection.length || !$collection.jquery ) {
    return;
  }

  function handleRemoved() {
    // Remove the collection in the callback
    $collection.remove();

    // Update things now that elements have been removed.
    this.$items = this._getItems();
    this._updateItemCount();

    this._fire( Shuffle.EventType.REMOVED, [ $collection, this ] );

    // Let it get garbage collected
    $collection = null;
  }

  // Hide collection first.
  this._toggleFilterClasses( $(), $collection );
  this._shrink( $collection );

  this.sort();

  this.$el.one( Shuffle.EventType.LAYOUT + '.' + SHUFFLE, $.proxy( handleRemoved, this ) );
};


/**
 * Destroys shuffle, removes events, styles, and classes
 */
Shuffle.prototype.destroy = function() {
  // If there is more than one shuffle instance on the page,
  // removing the resize handler from the window would remove them
  // all. This is why a unique value is needed.
  $window.off('.' + this.unique);

  // Reset container styles
  this.$el
      .removeClass( SHUFFLE )
      .removeAttr('style')
      .removeData( SHUFFLE );

  // Reset individual item styles
  this.$items
      .removeAttr('style')
      .removeData('point')
      .removeData('scale')
      .removeClass([
        Shuffle.ClassName.CONCEALED,
        Shuffle.ClassName.FILTERED,
        Shuffle.ClassName.SHUFFLE_ITEM
      ].join(' '));

  // Null DOM references
  this.$items = null;
  this.$el = null;
  this.sizer = null;
  this.element = null;
  this._transitions = null;

  // Set a flag so if a debounced resize has been triggered,
  // it can first check if it is actually destroyed and not doing anything
  this.destroyed = true;
};


// Plugin definition
$.fn.shuffle = function( opts ) {
  var args = Array.prototype.slice.call( arguments, 1 );
  return this.each(function() {
    var $this = $( this );
    var shuffle = $this.data( SHUFFLE );

    // If we don't have a stored shuffle, make a new one and save it
    if ( !shuffle ) {
      shuffle = new Shuffle( this, opts );
      $this.data( SHUFFLE, shuffle );
    } else if ( typeof opts === 'string' && shuffle[ opts ] ) {
      shuffle[ opts ].apply( shuffle, args );
    }
  });
};


// http://stackoverflow.com/a/962890/373422
function randomize( array ) {
  var tmp, current;
  var top = array.length;

  if ( !top ) {
    return array;
  }

  while ( --top ) {
    current = Math.floor( Math.random() * (top + 1) );
    tmp = array[ current ];
    array[ current ] = array[ top ];
    array[ top ] = tmp;
  }

  return array;
}


// You can return `undefined` from the `by` function to revert to DOM order
// This plugin does NOT return a jQuery object. It returns a plain array because
// jQuery sorts everything in DOM order.
$.fn.sorted = function(options) {
  var opts = $.extend({}, $.fn.sorted.defaults, options);
  var arr = this.get();
  var revert = false;

  if ( !arr.length ) {
    return [];
  }

  if ( opts.randomize ) {
    return randomize( arr );
  }

  // Sort the elements by the opts.by function.
  // If we don't have opts.by, default to DOM order
  if ( $.isFunction( opts.by ) ) {
    arr.sort(function(a, b) {

      // Exit early if we already know we want to revert
      if ( revert ) {
        return 0;
      }

      var valA = opts.by($(a));
      var valB = opts.by($(b));

      // If both values are undefined, use the DOM order
      if ( valA === undefined && valB === undefined ) {
        revert = true;
        return 0;
      }

      if ( valA < valB || valA === 'sortFirst' || valB === 'sortLast' ) {
        return -1;
      }

      if ( valA > valB || valA === 'sortLast' || valB === 'sortFirst' ) {
        return 1;
      }

      return 0;
    });
  }

  // Revert to the original array if necessary
  if ( revert ) {
    return this.get();
  }

  if ( opts.reverse ) {
    arr.reverse();
  }

  return arr;
};


$.fn.sorted.defaults = {
  reverse: false, // Use array.reverse() to reverse the results
  by: null, // Sorting function
  randomize: false // If true, this will skip the sorting and return a randomized order in the array
};

return Shuffle;

});

(function($) {
  var version = '1.7.2';
  var optionOverrides = {};
  var defaults = {
    exclude: [],
    excludeWithin: [],
    offset: 0,

    // one of 'top' or 'left'
    direction: 'top',

    // if set, bind click events through delegation
    //  supported since jQuery 1.4.2
    delegateSelector: null,

    // jQuery set of elements you wish to scroll (for $.smoothScroll).
    //  if null (default), $('html, body').firstScrollable() is used.
    scrollElement: null,

    // only use if you want to override default behavior
    scrollTarget: null,

    // fn(opts) function to be called before scrolling occurs.
    // `this` is the element(s) being scrolled
    beforeScroll: function() {},

    // fn(opts) function to be called after scrolling occurs.
    // `this` is the triggering element
    afterScroll: function() {},
    easing: 'swing',
    speed: 400,

    // coefficient for "auto" speed
    autoCoefficient: 2,

    // $.fn.smoothScroll only: whether to prevent the default click action
    preventDefault: true
  };

  var getScrollable = function(opts) {
    var scrollable = [];
    var scrolled = false;
    var dir = opts.dir && opts.dir === 'left' ? 'scrollLeft' : 'scrollTop';

    this.each(function() {
      var el = $(this);

      if (this === document || this === window) {
        return;
      }

      if (document.scrollingElement && (this === document.documentElement || this === document.body)) {
        scrollable.push(document.scrollingElement);

        return false;
      }

      if (el[dir]() > 0) {
        scrollable.push(this);
      } else {
        // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
        el[dir](1);
        scrolled = el[dir]() > 0;

        if (scrolled) {
          scrollable.push(this);
        }
        // then put it back, of course
        el[dir](0);
      }
    });

    if (!scrollable.length) {
      this.each(function() {
        // If no scrollable elements and <html> has scroll-behavior:smooth because
        // "When this property is specified on the root element, it applies to the viewport instead."
        // and "The scroll-behavior property of the … body element is *not* propagated to the viewport."
        // → https://drafts.csswg.org/cssom-view/#propdef-scroll-behavior
        if (this === document.documentElement && $(this).css('scrollBehavior') === 'smooth') {
          scrollable = [this];
        }

        // If still no scrollable elements, fall back to <body>,
        // if it's in the jQuery collection
        // (doing this because Safari sets scrollTop async,
        // so can't set it to 1 and immediately get the value.)
        if (!scrollable.length && this.nodeName === 'BODY') {
          scrollable = [this];
        }
      });
    }

    // Use the first scrollable element if we're calling firstScrollable()
    if (opts.el === 'first' && scrollable.length > 1) {
      scrollable = [scrollable[0]];
    }

    return scrollable;
  };

  $.fn.extend({
    scrollable: function(dir) {
      var scrl = getScrollable.call(this, {dir: dir});

      return this.pushStack(scrl);
    },
    firstScrollable: function(dir) {
      var scrl = getScrollable.call(this, {el: 'first', dir: dir});

      return this.pushStack(scrl);
    },

    smoothScroll: function(options, extra) {
      options = options || {};

      if (options === 'options') {
        if (!extra) {
          return this.first().data('ssOpts');
        }

        return this.each(function() {
          var $this = $(this);
          var opts = $.extend($this.data('ssOpts') || {}, extra);

          $(this).data('ssOpts', opts);
        });
      }

      var opts = $.extend({}, $.fn.smoothScroll.defaults, options);

      var clickHandler = function(event) {
        var escapeSelector = function(str) {
          return str.replace(/(:|\.|\/)/g, '\\$1');
        };

        var link = this;
        var $link = $(this);
        var thisOpts = $.extend({}, opts, $link.data('ssOpts') || {});
        var exclude = opts.exclude;
        var excludeWithin = thisOpts.excludeWithin;
        var elCounter = 0;
        var ewlCounter = 0;
        var include = true;
        var clickOpts = {};
        var locationPath = $.smoothScroll.filterPath(location.pathname);
        var linkPath = $.smoothScroll.filterPath(link.pathname);
        var hostMatch = location.hostname === link.hostname || !link.hostname;
        var pathMatch = thisOpts.scrollTarget || (linkPath === locationPath);
        var thisHash = escapeSelector(link.hash);

        if (thisHash && !$(thisHash).length) {
          include = false;
        }

        if (!thisOpts.scrollTarget && (!hostMatch || !pathMatch || !thisHash)) {
          include = false;
        } else {
          while (include && elCounter < exclude.length) {
            if ($link.is(escapeSelector(exclude[elCounter++]))) {
              include = false;
            }
          }

          while (include && ewlCounter < excludeWithin.length) {
            if ($link.closest(excludeWithin[ewlCounter++]).length) {
              include = false;
            }
          }
        }

        if (include) {
          if (thisOpts.preventDefault) {
            event.preventDefault();
          }

          $.extend(clickOpts, thisOpts, {
            scrollTarget: thisOpts.scrollTarget || thisHash,
            link: link
          });

          $.smoothScroll(clickOpts);
        }
      };

      if (options.delegateSelector !== null) {
        this
        .undelegate(options.delegateSelector, 'click.smoothscroll')
        .delegate(options.delegateSelector, 'click.smoothscroll', clickHandler);
      } else {
        this
        .unbind('click.smoothscroll')
        .bind('click.smoothscroll', clickHandler);
      }

      return this;
    }
  });

  $.smoothScroll = function(options, px) {
    if (options === 'options' && typeof px === 'object') {
      return $.extend(optionOverrides, px);
    }
    var opts, $scroller, scrollTargetOffset, speed, delta;
    var scrollerOffset = 0;
    var offPos = 'offset';
    var scrollDir = 'scrollTop';
    var aniProps = {};
    var aniOpts = {};

    if (typeof options === 'number') {
      opts = $.extend({link: null}, $.fn.smoothScroll.defaults, optionOverrides);
      scrollTargetOffset = options;
    } else {
      opts = $.extend({link: null}, $.fn.smoothScroll.defaults, options || {}, optionOverrides);

      if (opts.scrollElement) {
        offPos = 'position';

        if (opts.scrollElement.css('position') === 'static') {
          opts.scrollElement.css('position', 'relative');
        }
      }
    }

    scrollDir = opts.direction === 'left' ? 'scrollLeft' : scrollDir;

    if (opts.scrollElement) {
      $scroller = opts.scrollElement;

      if (!(/^(?:HTML|BODY)$/).test($scroller[0].nodeName)) {
        scrollerOffset = $scroller[scrollDir]();
      }
    } else {
      $scroller = $('html, body').firstScrollable(opts.direction);
    }

    // beforeScroll callback function must fire before calculating offset
    opts.beforeScroll.call($scroller, opts);

    scrollTargetOffset = (typeof options === 'number') ? options :
                          px ||
                          ($(opts.scrollTarget)[offPos]() &&
                          $(opts.scrollTarget)[offPos]()[opts.direction]) ||
                          0;

    aniProps[scrollDir] = scrollTargetOffset + scrollerOffset + opts.offset;
    speed = opts.speed;

    // automatically calculate the speed of the scroll based on distance / coefficient
    if (speed === 'auto') {

      // $scroller[scrollDir]() is position before scroll, aniProps[scrollDir] is position after
      // When delta is greater, speed will be greater.
      delta = Math.abs(aniProps[scrollDir] - $scroller[scrollDir]());

      // Divide the delta by the coefficient
      speed = delta / opts.autoCoefficient;
    }

    aniOpts = {
      duration: speed,
      easing: opts.easing,
      complete: function() {
        opts.afterScroll.call(opts.link, opts);
      }
    };

    if (opts.step) {
      aniOpts.step = opts.step;
    }

    if ($scroller.length) {
      $scroller.stop().animate(aniProps, aniOpts);
    } else {
      opts.afterScroll.call(opts.link, opts);
    }
  };

  $.smoothScroll.version = version;
  $.smoothScroll.filterPath = function(string) {
    string = string || '';

    return string
      .replace(/^\//, '')
      .replace(/(?:index|default).[a-zA-Z]{3,4}$/, '')
      .replace(/\/$/, '');
  };

  // default options
  $.fn.smoothScroll.defaults = defaults;

})(jQuery);

// The MIT License (MIT)

// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.




! function($) {

    "use strict";

    var Typed = function(el, options) {

        // chosen element to manipulate text
        this.el = $(el);

        // options
        this.options = $.extend({}, $.fn.typed.defaults, options);

        // attribute to type into
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;

        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;

        // text content of element
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()

        // html or plain text
        this.contentType = this.options.contentType;

        // typing speed
        this.typeSpeed = this.options.typeSpeed;

        // add a delay before typing starts
        this.startDelay = this.options.startDelay;

        // backspacing speed
        this.backSpeed = this.options.backSpeed;

        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;

        // div containing strings
        this.stringsElement = this.options.stringsElement;

        // input strings of text
        this.strings = this.options.strings;

        // character number position of current string
        this.strPos = 0;

        // current array position
        this.arrayPos = 0;

        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;

        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;

        // for stopping
        this.stop = false;

        // custom cursor
        this.cursorChar = this.options.cursorChar;

        // shuffle the strings
        this.shuffle = this.options.shuffle;
        // the order of strings
        this.sequence = [];

        // All systems go!
        this.build();
    };

    Typed.prototype = {

        constructor: Typed

        ,
        init: function() {
            // begin the loop w/ first current string (global self.strings)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout(function() {
                for (var i=0;i<self.strings.length;++i) self.sequence[i]=i;

                // shuffle the array if true
                if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                // Start typing
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        }

        ,
        build: function() {
            var self = this;
            // Insert cursor
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            if (this.stringsElement) {
                self.strings = [];
                this.stringsElement.hide();
                var strings = this.stringsElement.find('p');
                $.each(strings, function(key, value){
                    self.strings.push($(value).html());
                });
            }
            this.init();
        }

        // pass current string state to each function, types 1 char per call
        ,
        typewrite: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;

            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            //  self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }

            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout(function() {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1; // skip atleast 1
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }

                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }

                if (self.contentType === 'html') {
                    // skip over html tags while typing
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }

                // timeout for any pause after a character
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        // fires callback function
                        self.options.onStringTyped(self.arrayPos);

                        // is this the final string
                        if (self.arrayPos === self.strings.length - 1) {
                            // animation that occurs on the last typed string
                            self.options.callback();

                            self.curLoop++;

                            // quit if we wont loop back
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }

                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {

                        /* call before functions if applicable */
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);

                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }

                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite(curString, curStrPos);
                    }
                    // end of character pause
                }, charPause);

                // humanized value for typing
            }, humanize);

        }

        ,
        backspace: function(curString, curStrPos) {
            // exit when stopped
            if (this.stop === true) {
                return;
            }

            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;

            self.timeout = setTimeout(function() {

                // ----- this part is optional ----- //
                // check string array position
                // on the first string, only delete one word
                // the stopNum actually represents the amount of chars to
                // keep in the current string. In my case it's 14.
                // if (self.arrayPos == 1){
                //  self.stopNum = 14;
                // }
                //every other time, delete the whole typed string
                // else{
                //  self.stopNum = 0;
                // }

                if (self.contentType === 'html') {
                    // skip over html tags while backspacing
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }

                // ----- continue important stuff ----- //
                // replace text with base text + typed characters
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }

                // if the number (id of character in current string) is
                // less than the stop number, keep going
                if (curStrPos > self.stopNum) {
                    // subtract characters one by one
                    curStrPos--;
                    // loop the function
                    self.backspace(curString, curStrPos);
                }
                // if the stop number has been reached, increase
                // array position to next string
                else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;

                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;

                        // Shuffle sequence again
                        if(self.shuffle) self.sequence = self.shuffleArray(self.sequence);

                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }

                // humanized value for typing
            }, humanize);

        }
        /**
         * Shuffles the numbers in the given array.
         * @param {Array} array
         * @returns {Array}
         */
        ,shuffleArray: function(array) {
            var tmp, current, top = array.length;
            if(top) while(--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
            return array;
        }

        // Start & Stop currently not working

        // , stop: function() {
        //     var self = this;

        //     self.stop = true;
        //     clearInterval(self.timeout);
        // }

        // , start: function() {
        //     var self = this;
        //     if(self.stop === false)
        //        return;

        //     this.stop = false;
        //     this.init();
        // }

        // Reset and rebuild the element
        ,
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.after('<span id="' + id + '"/>')
            this.el.remove();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            // Send the callback
            self.options.resetCallback();
        }

    };

    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (!data) $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };

    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };


}(window.jQuery);
