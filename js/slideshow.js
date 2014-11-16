    $(document).ready(function() {
      $('.dropdown-toggle').dropdown();
      $('.left').on('click',displayPreviousImage);
      $('.right').on('click',displayNextImage);
    });

function displayNextImage() {
      x = (x === images.length - 1) ? 0 : x + 1;
    $(".landscape").fadeOut("1000", function() {
       $(".landscape").css("background-image", "url("+images[x]+")").fadeIn(1000);
    if (x==0) {
    $(".b-right").text("◦◘◦◦");
    }
    else if (x==1) {
    $(".b-right").text("◦◦◘◦");
  } else if (x==2) {
    $(".b-right").text("◦◦◦◘");
  } else if (x==3) {
    $(".b-right").text("◘◦◦◦");
  }
    });
}

function displayPreviousImage() {
      x = (x <= 0) ? images.length - 1 : x - 1;
    $(".landscape").fadeOut("1000", function() {
       $(".landscape").css("background-image", "url("+images[x]+")").fadeIn(1000);
    if (x==0) {
    $(".b-right").text("◦◘◦◦");
    }
    else if (x==1) {
    $(".b-right").text("◦◦◘◦");
  } else if (x==2) {
    $(".b-right").text("◦◦◦◘");
  } else if (x==3) {
    $(".b-right").text("◘◦◦◦");
  }
    });
}

function startTimer() {
      setInterval(displayNextImage, 8000);
}

var images = [], x = -1;
images[0] = "images/jumbo.png";
images[1] = "images/gala.png";
images[2] = "images/retreat.png";
images[3] = "images/untitled.png";