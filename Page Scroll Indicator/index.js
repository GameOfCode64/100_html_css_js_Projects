const indicator = document.querySelector(".indicator .progress");
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

// console.log(scrollHeight);
window.addEventListener("scroll", scroll);
function scroll() {
  let ScrollTop = document.documentElement.scrollTop;
  let scrolled = (ScrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}% `;
}
