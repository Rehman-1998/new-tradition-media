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
  