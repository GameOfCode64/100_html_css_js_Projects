const contact = document.querySelector(".content");

const baseUrl = "https://picsum.photos";
const row = 7;
for (let i = 0; i < row * 3; i++) {
  const img = document.createElement("img");
  img.src = `${baseUrl}/${randomSize()}`;
  contact.appendChild(img);
}
function randomSize() {
  return `${randomNumber()}/${randomNumber()}`;
}

function randomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
