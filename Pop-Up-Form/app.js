const btn1 = document.querySelector(".btn");
const btn2 = document.querySelector(".submit");
const form = document.querySelector(".form-box");
btn1.addEventListener("click", () => {
  form.classList.add("active");
});
btn2.addEventListener("click", () => {
  form.classList.remove("active");
});
