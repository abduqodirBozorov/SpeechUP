// fullscreen
var body = document.getElementById("body")
console.log(body);



var hamburber = document.querySelector(".hamburger")
var navlist = document.querySelector(".nav-list")

hamburber.addEventListener("click", function (e) {
  e.preventDefault()
  navlist.classList.toggle("nav-list--open")
})