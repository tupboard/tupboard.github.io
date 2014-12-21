var refreshIntervalId;

$(document).ready(function theTimer() {
      refreshIntervalId = setInterval(displayNextImage, 6000);
});

function endCycle() {
    clearInterval(refreshIntervalId);
}

    $(document).ready(function() {
      $('.dropdown-toggle').dropdown();
      $('.left').on('click',displayPreviousImage);
      $('.right').on('click',displayNextImage);
      $('.right').on('click',endCycle);
      $('.b-left').on('click', function() {
        window.location = "http://tupboard.github.io/aboutpboard.html";
      });
    });

function displayNextImage() {
      x = (x === images.length - 1) ? 0 : x + 1;
    $(".landscape").fadeOut("1000", function() {
       $(".landscape").css("background-image", "url("+images[x]+")").fadeIn(1000);
    if (x==0) {
    $(".b-left").text("What we do");
  }
    else if (x==1) {
    $(".b-left").text("Upcoming Events");
  } else if (x==2) {
    $(".b-left").text("Get to know us!");
  } else if (x==3) {
    $(".b-left").text("");
  }
    });
}

function displayPreviousImage() {
  clearInterval(refreshIntervalId);
      x = (x <= 0) ? images.length - 1 : x - 1;
    $(".landscape").fadeOut("1000", function() {
       $(".landscape").css("background-image", "url("+images[x]+")").fadeIn(1000);
    if (x==0) {
    $(".b-left").text("What we do");
    }
    else if (x==1) {
    $(".b-left").text("Upcoming Events");
  } else if (x==2) {
    $(".b-left").text("Get to know us!");
  } else if (x==3) {
    $(".b-left").text("");
  }
    });
}

var images = [], x = -1;
images[0] = "images/jumbo.png";
images[1] = "images/niehlson.png";
images[2] = "images/retreat.png";
images[3] = "images/untitled.png";