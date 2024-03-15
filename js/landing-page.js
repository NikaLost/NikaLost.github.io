window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var backgroundScale = 1 - scrollPosition * 0.0002; // Adjust the scaling factor as needed
  if (window.innerWidth <= 600) {
    console.log("Executing JavaScript for small screens");
    document.querySelector("#home").style.backgroundSize = `${
      400 * backgroundScale
    }%`;
  } else {
    const translateY = Math.sin(Date.now() / 1000) * 50; // Example vertical movement
    console.log("Executing JavaScript for large screens");
    document.querySelector("#home").style.backgroundSize = `${
      150 * backgroundScale
    }%`;
  }
});
