

    // Some buffer value, adjust this to get the rest of the content aligned properly

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

  // Set the height of the image container to the window height
});