const showDropdown = document.querySelector(".heading");
const menu = document.querySelector(".social-content");
const value = document.querySelector(".select");
const instagram = document.querySelector(".instagram");
const twitter = document.querySelector(".twitter");
const youtube = document.querySelector(".youtube");
const facebook = document.querySelector(".facebook");
const linkedin = document.querySelector(".linkedin");

showDropdown.addEventListener("click", () => {
  menu.classList.toggle("hide");
});
instagram.addEventListener("click", () => {
  value.textContent = "Instagram";
  menu.classList.toggle("hide");
});
twitter.addEventListener("click", () => {
  value.textContent = "Twitter";
  menu.classList.toggle("hide");
});
youtube.addEventListener("click", () => {
  value.textContent = "Youtube";
  menu.classList.toggle("hide");
});
facebook.addEventListener("click", () => {
  value.textContent = "Facebook";
  menu.classList.toggle("hide");
});
linkedin.addEventListener("click", () => {
  value.textContent = "Linkedin";
  menu.classList.toggle("hide");
});
