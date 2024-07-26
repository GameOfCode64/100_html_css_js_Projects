const javascript = document.querySelector(".javascript");
const Python = document.querySelector(".python");
const Golang = document.querySelector(".golang");
const java = document.querySelector(".java");
const php = document.querySelector(".php");

const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
const tab3 = document.querySelector(".tab-3");
const tab4 = document.querySelector(".tab-4");
const tab5 = document.querySelector(".tab-5");
tab1.addEventListener("click", () => {
  javascript.classList.add("active");
  Golang.classList.remove("active");
  java.classList.remove("active");
  php.classList.remove("active");
  Python.classList.remove("active");
});
tab2.addEventListener("click", () => {
  javascript.classList.remove("active");
  Golang.classList.remove("active");
  java.classList.remove("active");
  php.classList.remove("active");
  Python.classList.add("active");
});
tab3.addEventListener("click", () => {
  javascript.classList.remove("active");
  Golang.classList.add("active");
  java.classList.remove("active");
  php.classList.remove("active");
  Python.classList.remove("active");
});
tab4.addEventListener("click", () => {
  javascript.classList.remove("active");
  Golang.classList.remove("active");
  java.classList.add("active");
  php.classList.remove("active");
  Python.classList.remove("active");
});
tab5.addEventListener("click", () => {
  javascript.classList.remove("active");
  Golang.classList.remove("active");
  java.classList.remove("active");
  php.classList.add("active");
  Python.classList.remove("active");
});
