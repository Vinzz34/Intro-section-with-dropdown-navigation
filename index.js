let dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach((dropdownBtn) => {
  dropdownBtn.addEventListener("click", () => {
    let dropdown = dropdownBtn.nextElementSibling;
    let arrowUp = dropdownBtn.lastElementChild;
    let arrowDown = arrowUp.previousElementSibling;
    dropdown.classList.toggle("flex");
    arrowDown.classList.toggle("display-none");
    arrowUp.classList.toggle("display-block-desktop");
  });
});

let menu = document.getElementById("menu");
let close = document.getElementById("close");
let navbar = document.getElementById("navbar");
let bg = document.getElementById("bg-overlay");

menu.addEventListener("click", () => {
  menu.classList.toggle("display-none");
  close.classList.toggle("display-block-mobile");
  navbar.classList.toggle("show");
  bg.classList.toggle("bg-overlay");
  document.body.classList.toggle("overflow-hidden");
});

close.addEventListener("click", () => {
  menu.classList.toggle("display-none");
  close.classList.toggle("display-block-mobile");
  navbar.classList.toggle("show");
  bg.classList.toggle("bg-overlay");
  document.body.classList.toggle("overflow-hidden");
});
