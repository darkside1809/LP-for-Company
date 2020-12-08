const hamburger = document.querySelector(".header .navbar");
const menu = document.querySelector(".header .menu");
const menu_item = document.querySelectorAll(".header .menu li a");
const navbar = document.querySelector(
  ".header .navbar .nav__row"
);
   
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});
