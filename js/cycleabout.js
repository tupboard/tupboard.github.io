var images = [], x = -1;
images[0] = "images/fg.png";
images[1] = "images/wb.png";
images[2] = "images/tonias.png";
images[3] = "images/sf.png";
images[4] = "images/ww.png";

function displayNextImage() {
  if($(".cycles").is(":visible")) {
      x = (x === images.length - 1) ? 0 : x + 1;
    $(".cycles").fadeOut("1000", function() {
       $(".cycles").css("background-image", "url("+images[x]+")").fadeIn(1000);
    });
}
}

$(document).ready(function startTimer() {
      setInterval(displayNextImage, 8000);
});
