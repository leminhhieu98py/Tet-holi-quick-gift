// auto slideshow
$(".carousel").carousel();
$(".carousel").carousel({
  interval: 10,
});
$(".carousel").carousel("cycle");

// event when click on side-nav button
let menuBtn = document.getElementById("nav-btn");
let sideNav = document.getElementById("sideNav");
sideNav.style.left = "-200px";
menuBtn.addEventListener("click", () => {
  if (sideNav.style.left == "-200px") {
    sideNav.style.left = "0";
  } else {
    sideNav.style.left = "-200px";
  }
});
