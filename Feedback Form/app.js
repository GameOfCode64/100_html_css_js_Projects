const unhappy = document.querySelector(".unhappy");
const neutral = document.querySelector(".neutral");
const happy = document.querySelector(".happy");
const h3 = document.querySelector("h3");

unhappy.addEventListener("click", () => {
  unhappy.classList.toggle("active");
  neutral.classList.remove("active");
  happy.classList.remove("active");
  h3.innerText = "Your Feedback: 😒 Unhappy";
});

neutral.addEventListener("click", () => {
  neutral.classList.toggle("active");
  unhappy.classList.remove("active");
  happy.classList.remove("active");
  h3.innerText = "Your Feedback: 😑 Neutral";
});

happy.addEventListener("click", () => {
  happy.classList.toggle("active");
  unhappy.classList.remove("active");
  neutral.classList.remove("active");
  h3.innerText = "Your Feedback: 😊 Happy";
});
