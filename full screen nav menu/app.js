const menu = document.querySelector(".menu");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
});
