var elModalOpenButton = document.querySelector(".menu-btn");
var elModalOpenlink = document.querySelector(".header-mobile");


elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.toggle("nav--active");
});

