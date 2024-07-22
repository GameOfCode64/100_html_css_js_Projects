const input = document.querySelector(".input");
const upper = document.querySelector(".ABC");
const lower = document.querySelector(".abc");
const camel = document.querySelector(".Abc");
const bold = document.querySelector(".bold");
const italic = document.querySelector(".italic");
const underline = document.querySelector(".underline");
const text = document.querySelector(".text");

const value = input.value;

upper.addEventListener("click", () => {
  const value = input.value;
  text.textContent = value.toUpperCase();
});
lower.addEventListener("click", () => {
  const value = input.value;
  text.textContent = value.toLowerCase();
});
camel.addEventListener("click", () => {
  const value = input.value;
  text.innerHTML = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});
bold.addEventListener("click", () => {
  const value = input.value;
  text.textContent = value;
  text.style.fontWeight = 900;
});
italic.addEventListener("click", () => {
  const value = input.value;
  text.textContent = value;
  text.style.fontStyle = "italic";
});
underline.addEventListener("click", () => {
  const value = input.value;
  text.textContent = value;
  text.style.textDecoration = "underline";
});
