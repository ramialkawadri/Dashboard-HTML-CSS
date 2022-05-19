const searchOpenClassName = "search-open";
const navigationEl = document.querySelector(".navigation-bar");

document.querySelector(".nav-search-icon").addEventListener("click", () => {
  navigationEl.classList.add(searchOpenClassName);
});

document.querySelector(".nav-search-close").addEventListener("click", () => {
  navigationEl.classList.remove(searchOpenClassName);
});
