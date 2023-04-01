//  AOS Library
AOS.init();



// Add background class of stick header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // play-pause video
  function playToggleVideo() {
    var video = document.getElementById("my-video");
    var background = document.querySelector(".controller-background");
    
    if (video.paused) {
      video.play();
      background.classList.remove("play");
      background.classList.add("pause");
    } else {
      video.pause();
      background.classList.remove("pause");
      background.classList.add("play");
    }
  }


    // mute-umute video
    function soundToggleVideo() {
      var video = document.getElementById("my-video");
      var background = document.querySelector(".mic-background");
      
      if (video.muted) {
        video.muted = false;
        background.classList.remove("mute");
        background.classList.add("volume");
      } else {
        video.muted = true;
        background.classList.remove("volume");
        background.classList.add("mute");
      }
    }