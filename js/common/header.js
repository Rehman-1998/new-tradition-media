// Add background class of stick header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const hamburgerIcon = document.getElementById("header-icon");
  const callUs = document.getElementById("call-us-button");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("scrolled");
    hamburgerIcon.classList.remove("light-icon");
    hamburgerIcon.classList.add("dark-icon");
    callUs.classList.remove("light-call-us-button");
    callUs.classList.add("dark-call-us-button");
  } else {
    header.classList.remove("scrolled");
    hamburgerIcon.classList.add("light-icon");
    hamburgerIcon.classList.remove("dark-icon");
    callUs.classList.add("light-call-us-button");
    callUs.classList.remove("dark-call-us-button");
  }
});
