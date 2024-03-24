// DOM JS
// Navbar
const navbarNav = document.querySelector(".navbar-nav");
const linkNav = document.querySelectorAll(".navbar-nav a");

// Search
const searchBtn = document.querySelector("#search-btn");
const searchBox = document.querySelector("#search-box");
const searchForm = document.querySelector(".search-form");

// Shopping Cart
const cartBtn = document.querySelector("#shopping-cart-btn");
const shoppingCart = document.querySelector(".shopping-cart");

// Modal
const closeModalButton = document.querySelector(".close-icon");
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

// Hamburger Menu
const hm = document.querySelector("#hamburger-menu");

// When hamburger menu on click
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// if click link nav, close navbar
linkNav.forEach((item) =>
  item.addEventListener("click", () => navbarNav.classList.remove("active"))
);

// If click search icon, show input search
searchBtn.addEventListener("click", (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});

// If Cart onclick show shopping-cart
cartBtn.addEventListener("click", (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
});

// click out of sidebar elements
document.addEventListener("click", function (e) {
  // For hamburger menu
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // For search btn
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // For Shopping Cart
  if (!cartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }

  // For Modal Box
  if (itemDetailModal === e.target) {
    itemDetailModal.style.display = "none";
  }
});

// Modal Box
// Show Modal
itemDetailButton.addEventListener("click", (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
});

// Close Modal
closeModalButton.addEventListener("click", (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
});
