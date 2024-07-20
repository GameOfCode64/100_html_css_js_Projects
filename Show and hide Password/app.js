const input = document.querySelector("input");
const eye = document.querySelector(".eye");

eye.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    input.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
});
