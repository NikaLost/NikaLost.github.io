$(document).ready(function() {
  $(".fa-bars, ul a").on("click", function() {
    $("header nav ul").toggleClass("open");
  });
});
