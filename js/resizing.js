

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

    $(document).ready(function() {
   var windowHeight = $(window).height();
   var windowWidth = $(window).width();
   var percentage = windowHeight / 768;
   var percent2 = windowWidth / 1024;
   if (percentage > percent2) {
    percentage = percent2;
   }

   var newsize = $("h1").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $("h1").css("font-size", newsize);

   newsize = $("h2").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $("h2").css("font-size", newsize);

   newsize = $("h3").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $("h3").css("font-size", newsize);

   newsize = $("h4").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $("h4").css("font-size", newsize);

   newsize = $("p").css("font-size");
   newsize = newsize.replace('px','');
   newsize = Math.floor(newsize*percentage);
   newsize = newsize+"px";
   $("p").css("font-size", newsize);

   });