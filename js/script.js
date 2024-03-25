// Data Products
const dataProducts = [
  {
    image: "img/products/1-p.jpg",
    noProduct: 1,
    title: "Coffee Been",
    desc: "Welcome to our coffee shop, where every sip tells a story and every bean is carefully selected to ensure a remarkable experience. Our signature Coffee Bean blend is a testament to our dedication to quality and taste.",
    starNumber: 3,
    discPrice: "30",
    realPrice: "55",
  },
  {
    image: "img/products/2-p.jpg",
    noProduct: 2,
    title: "Coffee Cup",
    desc: "Elevate your coffee-drinking experience with our exquisite collection of coffee cups. Crafted with precision and style, each cup is designed to enhance the flavors and aromas of our premium brews.",
    starNumber: 4,
    discPrice: "18",
    realPrice: "30",
  },
  {
    image: "img/products/3-p.jpg",
    noProduct: 3,
    title: "Croissant",
    desc: "Indulge in the exquisite taste of our freshly baked croissants at our cozy coffee shop. Crafted with precision and passion, our croissants are a delightful blend of buttery richness and flaky texture, perfect for your morning pick-me-up or afternoon treat.",
    starNumber: 4,
    discPrice: "22",
    realPrice: "25",
  },
  {
    image: "img/products/4-p.jpg",
    noProduct: 4,
    title: "Brownie",
    desc: "Treat yourself to a moment of indulgence with our irresistible brownies. Baked fresh daily, our brownies are a harmonious blend of fudgy richness and decadent chocolate flavor.",
    starNumber: 5,
    discPrice: "25",
    realPrice: "40",
  },
  {
    image: "img/products/5-p.jpg",
    noProduct: 5,
    title: "Muffin",
    desc: "Each muffin is lovingly baked to perfection, ensuring a burst of flavor in every bite. Whether you're in the mood for a sweet treat or a savory snack, our muffins are sure to satisfy your taste buds and brighten your day.",
    starNumber: 4,
    discPrice: "30",
    realPrice: "50",
  },
  {
    image: "img/products/6-p.jpg",
    noProduct: 6,
    title: "Donut",
    desc: "Indulge in the irresistible allure of our donuts, boasting a perfect balance of soft, fluffy dough and delectable toppings. From classic glazed and powdered sugar to indulgent chocolate frosted and colorful sprinkles, our donut variety caters to every palate and preference.",
    starNumber: 3,
    discPrice: "10",
    realPrice: "30",
  },
];

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
const modalContainer = document.querySelector("#modal-container");

// Hamburger Menu
const hm = document.querySelector("#hamburger-menu");

// Products Row
let productsRow = document.querySelector("#row-products");

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
    modalContainer.lastElementChild.remove();
  }
});

// element star
const star = `<i class="fa-regular fa-star"></i>`;
const starFullColor = `<i class="fa-solid fa-star"></i>`;

// Make element products card
dataProducts.map((product) => {
  const starFull = [...Array(product.starNumber)].map((_) => starFullColor);
  for (let i = starFull.length; i < 5; i++) {
    starFull.push(star);
  }
  const stars = `${starFull[0]}${starFull[1]}${starFull[2]}${starFull[3]}${starFull[4]}`;

  productsRow.innerHTML += `<div class="product-card">
          <div class="product-icons">
            <a ><img src="img/svg/shopping-cart.svg"/></a>
            <a onclick="showModal(${product.noProduct})"><img src="img/svg/eye.svg"/></a>
          </div>
          <div class="product-image">
            <img src="${product.image}" alt="Product ${product.noProssduct}" />
          </div>
          <div class="product-content">
            <h3>${product.title}</h3>
            <div class="product-stars">
            ${stars}
            </div>
            <div class="product-price">IDR ${product.discPrice}k <span>IDR ${product.realPrice}k</span></div>
          </div>
        </div>`;
});

// Show Modal
function showModal(noProduct) {
  const modalProduct = dataProducts[noProduct - 1];
  const starFull = [...Array(modalProduct.starNumber)].map(
    (_) => starFullColor
  );
  for (let i = starFull.length; i < 5; i++) {
    starFull.push(star);
  }
  const stars = `${starFull[0]}${starFull[1]}${starFull[2]}${starFull[3]}${starFull[4]}`;

  modalContainer.innerHTML += `<div class="modal-content">
          <img src="${modalProduct.image}" alt="${modalProduct.noProduct}" />
          <div class="product-content">
            <h3>Product ${modalProduct.noProduct}</h3>
            <p>
              ${modalProduct.desc}
            </p>
            <div class="product-stars">
              ${stars}
            </div>
            <div class="product-price">IDR ${modalProduct.discPrice}k <span>IDR ${modalProduct.realPrice}k</span></div>
            <a><img src="img/svg/shopping-cart.svg"/> <span>add to cart</span></a
            >
          </div>
        </div>`;

  itemDetailModal.style.display = "flex";
}

// Close Modal
function removeModal() {
  itemDetailModal.style.display = "none";
  modalContainer.lastElementChild.remove();
}
