var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

$(document).ready(function() {
if (!isMobile.any()) {
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
}
   });