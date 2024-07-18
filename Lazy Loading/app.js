const load = document.querySelector(".loading");
const back = document.querySelector(".background");

let loading = 0;
let int = setInterval(bluing, 30);
function bluing() {
  loading++;
  if (loading > 99) {
    clearInterval(int);
  }
  load.innerHTML = `${loading}%`;
  load.style.opacity = scale(loading, 0, 100, 1, 0);
  back.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
