$(document).ready(function startTimer() {
      setInterval(displayImage, 6000);
});

function displayImage() {
        x = (x === imgs.length - 1) ? 0 : x + 1;
      $(".concerts").fadeOut("1000", function() {
       $(".concerts").css("background-image", "url("+imgs[x]+")").fadeIn(1000);
     });
      $(".entertainment").fadeOut("1000", function() {
       $(".entertainment").css("background-image", "url("+pics[x]+")").fadeIn(1000);
     });
      $(".film").fadeOut("1000", function() {
       $(".film").css("background-image", "url("+pix[x]+")").fadeIn(1000);
     });}

var imgs = [], x = -1;
imgs[0] = "images/msmr.png";
imgs[1] = "images/cannon.png";
imgs[2] = "images/cboard.png";

var pics = [], x = -1;
pics[0] = "images/griffin.png";
pics[1] = "images/cohen.png";
pics[2] = "images/eboard.png";

var pix = [], x = -1;
pix[0] = "images/cochairs.png";
pix[1] = "images/filmgroup.png";
pix[2] = "images/filmseries.png";