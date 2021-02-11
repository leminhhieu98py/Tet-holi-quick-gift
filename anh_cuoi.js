// declare pages
let imgs1 = document.getElementById("page1");
let imgs2 = document.getElementById("page2");

// declare buttons to choose page
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

// default display status at first
imgs1.style.display = "block";
imgs2.style.display = "none";

// add eventListener
btn1.addEventListener("click", () => {
  imgs1.style.display = "block";
  imgs2.style.display = "none";
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

btn2.addEventListener("click", () => {
  imgs1.style.display = "none";
  imgs2.style.display = "block";
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
