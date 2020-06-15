let menu = document.querySelector(".menu");
let navbar = document.querySelector(".header-left");
let close = document.querySelector(".close");

console.log("Hello World");


menu.addEventListener("click", function(e) {
    setTimeout(function() {
        if (e.target.className === "menu") {
            navbar.style.display = "block";
          } else if (e.target.className === "close") {
            navbar.style.display = "none";
          }
    }, 200)
 
});

close.addEventListener("click", function(e) {
    setTimeout(function() {
        if (e.target.className === "close") {
            navbar.animate([
                {transform: 'translateX(0px)'},
                {transform: 'translateX(-900px)'}

            ],
            {
                duration: 500
            }, "linear");
           
            
            
    } 
}, 200);

setTimeout(function() {
    navbar.style.display = "none";
}, 700)
  
  
});
