const input = document.querySelector(".input");
const icon = document.querySelector(".icon");

input.addEventListener("keydown", () => {
  icon.classList.add("show");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (input.value.match(pattern)) {
    icon.classList.add("valid");
    icon.classList.add("fa-circle-check");
    icon.classList.remove("fa-circle-xmark");
  } else {
    icon.classList.remove("valid");
    icon.classList.add("fa-circle-xmark");
    icon.classList.remove("fa-circle-check");
  }
});
