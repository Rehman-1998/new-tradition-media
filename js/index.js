//  AOS Library
AOS.init();

// Add background class of stick header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const hamburgerIcon = document.getElementById("header-icon")
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("scrolled");
    hamburgerIcon.classList.remove("light-icon")
    hamburgerIcon.classList.add("dark-icon")
  } else {
    header.classList.remove("scrolled");
    hamburgerIcon.classList.add("light-icon")
    hamburgerIcon.classList.remove("dark-icon")
  }
});

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


