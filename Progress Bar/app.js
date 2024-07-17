const progress = document.querySelector(".progress");
const prev = document.getElementById("pre");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeIndex = 1;

next.addEventListener("click", () => {
  activeIndex++;
  if (activeIndex > circles.length) {
    activeIndex = circles.length;
  }
  updateUi();
});
prev.addEventListener("click", () => {
  activeIndex--;
  if (activeIndex < 1) {
    activeIndex = 1;
  }
  updateUi();
});

function updateUi() {
  circles.forEach((circle, index) => {
    if (index < activeIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (activeIndex === 1) {
    prev.disabled = true;
  } else if (activeIndex === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
