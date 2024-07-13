const nav = document.querySelector("nav");
const btn = document.querySelector(".toggle");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
