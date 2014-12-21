$(document).ready(function() {
   var windowHeight = $(window).height();
   var percentage = windowHeight / 680;

   newsize = $("h1").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $("h1").css("font-size", newsize);

   var newsize = $(".text3").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $(".text3").css("font-size", newsize);

   newsize = $(".text").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $(".text").css("font-size", newsize);

   newsize = $(".text1").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $(".text1").css("font-size", newsize);

   newsize = $(".text4").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $(".text4").css("font-size", newsize);

   newsize = $(".pxchange").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $(".pxchange").css("font-size", newsize);

   });