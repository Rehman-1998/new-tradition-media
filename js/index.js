//  AOS Library
AOS.init();

// play-pause video
function playToggleVideo() {
  var video = document.getElementById("my-video");
  var background = document.querySelector(".controller-background");

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

// mute-umute video
function soundToggleVideo() {
  var video = document.getElementById("my-video");
  var background = document.querySelector(".mic-background");

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



// play-pause video
function playContentCreationVideoToggleVideo() {
  var video = document.getElementById("my-video-2");
  var background = document.querySelector(".content-controller-background");

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

// mute-umute video
function soundContentCreationVideoToggleVideo() {
  var video = document.getElementById("my-video-2");
  var background = document.querySelector(".content-mic-background");

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


