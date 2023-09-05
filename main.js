const searchBox = document.querySelector(".js-search-box");
const btnSearch = document.querySelector(".js-search");
const btnClose = document.querySelector(".js-close-btn");
const inputSearch = document.querySelector(".js-input-search");

btnSearch.addEventListener("click", () => {
    searchBox.classList.add("active");
})

btnClose.addEventListener("click", () => {
    searchBox.classList.remove("active");
    inputSearch.value = '';
})