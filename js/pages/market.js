function playMarketToggleVideo(button) {
  var video = button.parentNode.parentNode.previousElementSibling;
  //   var background = button.querySelector(".market-controller-background");
  var background = button.parentNode.querySelector(
    ".market-controller-background"
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
  //   var background = button.querySelector(".market-mic-background");
  var background = button.parentNode.querySelector(".market-mic-background");

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

// var videos = document.querySelectorAll(".market-video");

// videos.forEach(function (video) {
//   video.addEventListener("ended", function () {
//     // Handle the end of the video
//   });
// });
