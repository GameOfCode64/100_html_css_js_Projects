const body = document.body;
const keyName = document.querySelector(".keyName");
const KeyCode = document.querySelector(".KeyCode");

body.addEventListener("keydown", (e) => {
  keyName.innerText = e.key;
  KeyCode.innerText = e.keyCode;
});
