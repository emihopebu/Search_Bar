const searchInputWrapper = document.querySelector(".search-input-wrapper");

const searchIcon = document.querySelector(".search-icon i");

searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchInputWrapper.classList.add("change");
});
