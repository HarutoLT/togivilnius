const enBtn = document.getElementById("en-btn");
const ltBtn = document.getElementById("lt-btn");

const elements = document.querySelectorAll("[data-en]");

enBtn.addEventListener("click", () => {
  elements.forEach(el => {
    el.textContent = el.getAttribute("data-en");
  });
});

ltBtn.addEventListener("click", () => {
  elements.forEach(el => {
    el.textContent = el.getAttribute("data-lt");
  });
});