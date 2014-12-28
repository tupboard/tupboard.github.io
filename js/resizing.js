$(document).ready(function() {
   var windowHeight = $(window).height();
   var $imageWrapper = $('.resizable');
   $imageWrapper.height( windowHeight );
});

// Change the div height on window resize
$(window).resize(function() {
   var windowHeight = $(window).height();
   var $imageWrapper = $('.resizable');
   $imageWrapper.height( windowHeight );
});