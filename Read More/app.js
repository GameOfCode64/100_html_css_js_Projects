const button = document.querySelector("button");
const readMore = document.querySelector(".more");

button.addEventListener("click", () => {
  readMore.classList.toggle("show");
});
