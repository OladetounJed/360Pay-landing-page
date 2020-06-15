let menu = document.querySelector(".menu");
let navbar = document.querySelector(".header-left");
let close = document.querySelector(".close");

console.log("Hello World");


menu.addEventListener("click", function(e) {
  if (e.target.className === "menu") {
    navbar.style.display = "block";
  } else if (e.target.className === "close") {
    navbar.style.display = "none";
  }
});

close.addEventListener("click", function(e) {
  if (e.target.className === "close") {
    navbar.style.display = "none";
  }
});
