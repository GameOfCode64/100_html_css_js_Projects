const content = document.querySelector(".content");
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

content.addEventListener("click", () => {
  if (toggle.style.left === "5px") {
    toggle.style.left = "75px";
    body.style.backgroundColor = "white";
    toggle.style.backgroundColor = "white";
    content.style.backgroundColor = "black";
  } else {
    toggle.style.left = "5px";
    body.style.backgroundColor = "black";
    toggle.style.backgroundColor = "black";
    content.style.backgroundColor = "white";
  }
});
