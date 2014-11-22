    $(document).ready(function() {
      $('.dropdown-toggle').dropdown();
      $('.left').on('click',displayPreviousImage);
      $('.right').on('click',displayNextImage);
      $('.b-left').on('click', function() {
        window.location = "aboutpboard.html";
      });
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

function displayNextImage() {
      x = (x === images.length - 1) ? 0 : x + 1;
    $(".landscape").fadeOut("1000", function() {
       $(".landscape").css("background-image", "url("+images[x]+")").fadeIn(1000);
    if (x==0) {
    $(".b-right").text("◦◘◦◦");
    $(".b-left").text("What we do");
  }
    else if (x==1) {
    $(".b-right").text("◦◦◘◦");
    $(".b-left").text("Upcoming Events");
  } else if (x==2) {
    $(".b-right").text("◦◦◦◘");
    $(".b-left").text("Get to know us!");
  } else if (x==3) {
    $(".b-right").text("◘◦◦◦");
    $(".b-left").text("");
  }
    });
}

function displayPreviousImage() {
      x = (x <= 0) ? images.length - 1 : x - 1;
    $(".landscape").fadeOut("1000", function() {
       $(".landscape").css("background-image", "url("+images[x]+")").fadeIn(1000);
    if (x==0) {
    $(".b-right").text("◦◘◦◦");
    $(".b-left").text("What we do");
    }
    else if (x==1) {
    $(".b-right").text("◦◦◘◦");
    $(".b-left").text("Upcoming Events");
  } else if (x==2) {
    $(".b-right").text("◦◦◦◘");
    $(".b-left").text("Get to know us!");
  } else if (x==3) {
    $(".b-right").text("◘◦◦◦");
    $(".b-left").text("");
  }
    });

    $(".concerts").fadeOut("1000", function() {
       $(".concerts").css("background-image", "url("+imgs[x]+")").fadeIn(1000);
     });
}

function startTimer() {
      setInterval(displayImage, 6000);
}

var images = [], x = -1;
images[0] = "images/jumbo.png";
images[1] = "images/gala.png";
images[2] = "images/retreat.png";
images[3] = "images/untitled.png";

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