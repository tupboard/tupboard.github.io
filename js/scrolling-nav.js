//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//jQuery for caption pop-ups
$(document).ready(function() {
      $('.caption').slideUp(250);
});

$(document).ready(function() {
    $('.box').hover(function() {
    $(this).find('.caption').slideDown(250);
  }, function() {
  $(this).find('.caption').slideUp(250);
    }
  );
});

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