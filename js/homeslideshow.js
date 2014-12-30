var refreshIntervalId;
var subtitle = ["From Fall Gala,", "From Fall Gala, to Spring Fling,", "From Fall Gala to Spring Fling,</br> We've Got You Covered."];
var i = 0;
var count = 0;
var textloop, refreshIntervalId;

function loop() {
  clearInterval(textloop);
  textloop = setInterval(loop, 200);
  if (i <= subtitle[count].length) {
    substring = subtitle[count].substr(0, i);
    $(".hometext").html(substring);
    if (i==32) {
      i=i+4;
    }
    i=i+1;
  }
  else if (i > subtitle[count].length) {
    clearInterval(textloop);
    count++;
    if (count < 3) {
        delayedEntry = setInterval(displayNextImage, 2000);
        refreshIntervalId = setInterval(theTimer, 2200);
    }
    if (count == 3) {
      delayedEntry = setInterval(displayNextImage, 2500);
    }
  }
}

function theTimer() {
    clearInterval(refreshIntervalId);
    textloop = setInterval(loop, 800);
}

function endCycle() {
    clearInterval(refreshIntervalId);
}

    $(document).ready(function() {
      $('.dropdown-toggle').dropdown();
      $('.left').on('click',displayPreviousImage);
      $('.right').on('click',displayNextImage);
      $('.right').on('click',endCycle);
    });

function displayNextImage() {
  clearInterval(delayedEntry);
      x = (x === images.length - 1) ? 0 : x + 1;
    $(".landscape").fadeOut("1000", function() {
       $(".landscape").css("background-image", "url("+images[x]+")").fadeIn(1000);
    if (count==3) {
      $(".left").css("visibility", "visible");
      $(".right").css("visibility", "visible");
      $(".hometext").text("Welcome");
      count++;
  } else if (count>3) {
      $(".hometext").text("");
  }
    });
}

function displayPreviousImage() {
  clearInterval(refreshIntervalId);
      x = (x <= 0) ? images.length - 1 : x - 1;
    $(".landscape").fadeOut("1000", function() {
       $(".landscape").css("background-image", "url("+images[x]+")").fadeIn(1000);
    });
}

var images = [], x = -1;
images[0] = "images/fling.png";
images[1] = "images/retreat.png";
images[2] = "images/welcome.png";
images[3] = "images/untitled.png";