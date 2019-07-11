function hamburger() {
  var dropDown = document.getElementById('hamburgerMenu');
  console.log(dropDown);
  if (dropDown.style.display === "block") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "block";
  }
}
