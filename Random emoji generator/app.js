// ! Project 1 (Random Emoji Generator)

const emoji = document.querySelector(".emoji");
const btn = document.querySelector(".generate");

btn.addEventListener("click", () => {
  generateEmoji();
});
function generateEmoji() {
  const emojis = ["😂", "🤣", "😍", "😘", "😁", "😒"];
  const number = Math.floor(Math.random() * emojis.length);
  emoji.innerText = emojis[number];
}
