$(document).ready(function(){

	$(window).scroll(function() {
   var hT = $('.landscape').offset().top,
       hH = $('.landscape').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $(".nav-one").css("color",$("h1").css("color"));   	
       $(".nav-two").css("color",$("body").css("color"));   	
       $(".nav-three").css("color",$("body").css("color"));
} else {
       $(".nav-one").css("color",$("body").css("color"));
   }

   var hT = $('.socc').offset().top,
       hH = $('.socc').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $(".nav-one").css("color",$("body").css("color"));   	
       $(".nav-two").css("color", $("h1").css("color"));
   } else {
       $(".nav-two").css("color",$("body").css("color"));
   }

   var hT = $('.wball').offset().top,
       hH = $('.wball').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $(".nav-one").css("color",$("body").css("color"));   	
       $(".nav-two").css("color",$("body").css("color"));   	
       $(".nav-three").css("color",$("h1").css("color"));
   } else {
       $(".nav-three").css("color",$("body").css("color"));
 }
});
});