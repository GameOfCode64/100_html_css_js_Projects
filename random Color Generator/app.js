const btn = document.querySelector("#btn");
const hexcode = document.querySelector(".hexcode");

function generator() {
  let letter = "0123456789ABCDE";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", () => {
  document.body.style.background = generator();
  hexcode.innerHTML = generator();
});
