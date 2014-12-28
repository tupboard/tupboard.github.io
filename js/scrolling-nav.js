//Collapsable Bootstrap Nav
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Easy Scrolling on Click
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