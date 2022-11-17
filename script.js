// -
const leftbtn = document.querySelector(".left-menu-btn");
const leftUl = document.querySelector(".left-ul");
const closebtn = document.querySelector(".btn-close-nav");

leftbtn.addEventListener("click", () => {
  leftUl.classList.toggle("ulcome");
});

closebtn.addEventListener("click", () => {
  leftUl.classList.toggle("ulcome");
});
