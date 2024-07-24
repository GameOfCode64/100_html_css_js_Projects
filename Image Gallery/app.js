const modal = document.querySelector(".show");
const close = document.querySelector(".close");
const images = document.querySelectorAll("img");
const fullImage = document.querySelector(".fullImage");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    show(`./images/img${index}.jpg`);
  });
});

function show(url) {
  modal.classList.add("active");
  fullImage.src = url;
}

close.addEventListener("click", () => {
  modal.classList.remove("active");
});
