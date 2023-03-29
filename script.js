var currentImage = 1;
var imageCount = 10; // Set this to the total number of images you have
var intervalId;

function startAnimation() {
  intervalId = setInterval(function() {
    currentImage++;
    if (currentImage > imageCount) {
      currentImage = 1;
    }
    document.getElementById("spi").src = currentImage + ".jpg";
  }, 7600); // Change this number to adjust the time between image switches (in milliseconds)
}

function stopAnimation() {
  clearInterval(intervalId);
}
