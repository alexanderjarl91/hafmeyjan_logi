const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile__nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

// DARK NAVBAR
const menuBtn2 = document.querySelector(".hamburger_dark");
const mobileMenu2 = document.querySelector(".mobile__nav");

menuBtn.addEventListener("click", () => {
  menuBtn2.classList.toggle("is-active");
  mobileMenu2.classList.toggle("is-active");
});
