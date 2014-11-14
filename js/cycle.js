function displayNextImage() {
      x = (x === images.length - 1) ? 0 : x + 1;
      document.getElementById(".landscape").css("background-image","images[x]");
}

function displayPreviousImage() {
      x = (x <= 0) ? images.length - 1 : x - 1;
      document.getElementById(".landscape").css("background-image","images[x]");
}

function startTimer() {
      setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "tufts.jpg";
images[1] = "wball.png";
images[2] = "socc.png";