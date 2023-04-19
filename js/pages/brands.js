function playMarketToggleVideo(button) {
  var video = button.parentNode.parentNode.previousElementSibling;
  var background = button.parentNode.querySelector(
    ".brands-controller-background"
  );

  if (video.paused) {
    video.play();
    background.classList.remove("fa-circle-play");
    background.classList.add("fa-circle-pause");
  } else {
    video.pause();
    background.classList.add("fa-circle-play");
    background.classList.remove("fa-circle-pause");
  }
}

function soundMarketToggleVideo(button) {
  var video = button.parentNode.parentNode.previousElementSibling;
  var background = button.parentNode.querySelector(".brands-mic-background");

  if (video.muted) {
    video.muted = false;
    background.classList.remove("fa-volume-xmark");
    background.classList.add("fa-volume-high");
  } else {
    video.muted = true;
    background.classList.remove("fa-volume-high");
    background.classList.add("fa-volume-xmark");
  }
}
