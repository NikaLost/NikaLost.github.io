window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var backgroundScale = 1 - scrollPosition * 0.0002; // Adjust the scaling factor as needed

  document.querySelector("#home").style.backgroundSize = `${
    150 * backgroundScale
  }%`;
});
