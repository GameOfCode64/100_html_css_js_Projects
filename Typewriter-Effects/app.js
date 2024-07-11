console.log("Hello");
const text = document.querySelector(".type-text");
const curser = document.querySelector(".curser");

let Word = ["Awesome", "Fun", "Cool", "Life", "Famous", "Wired"];

const td = 200;
const ed = 200;
const nld = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (Word.length) {
    setTimeout(type, nld);
  }
});

function type() {
  if (charIndex < Word[index].length) {
    text.textContent += Word[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, td);
  } else {
    setTimeout(erase, nld);
  }
}

function erase() {
  if (charIndex > 0) {
    text.textContent = Word[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, ed);
  } else {
    index++;
    if (index >= Word.length) {
      index = 0;
    }
    setTimeout(type, td + 1100);
  }
}
