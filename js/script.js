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
const amountCartItem = document.querySelector(".amount-item");
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartItems = document.querySelector(".shopping-cart-items");
const amountTotalPrice = document.querySelector("#amount-total-price");
const orderProductsBtn = document.querySelector("#order-products-btn");

// Modal
const closeModalButton = document.querySelector(".close-icon");
const itemDetailModal = document.querySelector("#item-detail-modal");
const modalContainer = document.querySelector("#modal-container");

// Hamburger Menu
const hm = document.querySelector("#hamburger-menu");

// Products Row
const productsRow = document.querySelector("#row-products");

// Cart Data Object
const cartData = {};
dataProducts.forEach(
  (product) => (cartData[product.noProduct] = { amount: 0, add: false })
);

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
const starSolid = `<i class="fa-solid fa-star"></i>`;

// Make element products card
dataProducts.map(
  ({ starNumber, noProduct, image, title, discPrice, realPrice }) => {
    const [str1 = star, str2 = star, str3 = star, str4 = star, str5 = star] = [
      ...Array(starNumber),
    ].map((_) => starSolid);
    const stars = str1 + str2 + str3 + str4 + str5;

    productsRow.innerHTML += `<div class="product-card">
          <div class="product-icons">
            <a onclick="addToCart(${noProduct})"><img src="img/svg/shopping-cart.svg"/></a>
            <a onclick="showModal(${noProduct})"><img src="img/svg/eye.svg"/></a>
          </div>
          <div class="product-image">
            <img src="${image}" alt="Product ${noProduct}" />
          </div>
          <div class="product-content">
            <h3>${title}</h3>
            <div class="product-stars">
            ${stars}
            </div>
            <div class="product-price">IDR ${discPrice}k <span>IDR ${realPrice}k</span></div>
          </div>
        </div>`;
  }
);

// Show Modal
function showModal(noProductPara, contentSuccesModal = false) {
  const { noProduct, image, desc, realPrice, discPrice, starNumber } =
    dataProducts[noProductPara - 1];
  const [str1 = star, str2 = star, str3 = star, str4 = star, str5 = star] = [
    ...Array(starNumber),
  ].map((_) => starSolid);
  const stars = str1 + str2 + str3 + str4 + str5;

  modalContainer.innerHTML += `<div class="modal-content">
          ${
            contentSuccesModal
              ? contentSuccesModal
              : `<img src="${image}" alt="${noProduct}" />
          <div class="product-content">
            <h3>Product ${noProduct}</h3>
            <p>
              ${desc}
            </p>
            <div class="product-stars">
              ${stars}
            </div>
            <div class="product-price">IDR ${discPrice}k <span>IDR ${realPrice}k</span></div>
            <a onclick="addToCart(${noProductPara})"><img src="img/svg/shopping-cart.svg"/> <span>add to cart</span></a
            >
          </div>`
          }
        </div>`;

  itemDetailModal.style.display = "flex";
}

// Close Modal
function removeModal() {
  itemDetailModal.style.display = "none";
  modalContainer.lastElementChild.remove();
}

// Add to cart and Remove from Cart

function addToCart(noProduct) {
  cartData[noProduct].amount = cartData[noProduct].amount + 1;

  makeItemCart(noProduct);
}

function removeFromCart(noProduct) {
  cartData[noProduct].amount = cartData[noProduct].amount - 1;

  makeItemCart(noProduct);
}

function makeItemCart(noProductPara) {
  dataProducts.forEach(({ noProduct, image, discPrice }) => {
    if (cartData[noProduct].amount && !cartData[noProduct].add) {
      shoppingCartItems.innerHTML += `<div class="cart-item" id="cart-item${noProduct}">
          <img src=${image} alt=${noProduct} s/>
          <div class="item-detail">
            <h3>Product ${noProduct}</h3>
            <div class="item-price">IDR ${discPrice}k</div>
          </div>
          <div class="total-item">
            <div class="amount-item">
              <div class="cart-btn-amount" onclick="addToCart(${noProduct})">+</div>
              <div id="amount-cartitem${noProduct}">${cartData[noProductPara].amount}</div>
              <div class="cart-btn-amount" onclick="removeFromCart(${noProduct})">-</div>
            </div>
            <div class="total-price-item" id="total-price-item${noProduct}">${discPrice}K
            </div>
          </div>
        </div>`;
      orderProductsBtn.style.display = "block";

      totalAmountItem();
      totalPriceItems();
      return (cartData[noProduct].add = true);
    } else if (cartData[noProduct].amount >= 1) {
      document.querySelector(`#amount-cartitem${noProduct}`).innerHTML =
        cartData[noProduct].amount;
      document.querySelector(`#total-price-item${noProduct}`).textContent =
        cartData[noProduct].amount * discPrice + "K";

      totalAmountItem();
      totalPriceItems();
    } else if (!cartData[noProduct].amount && cartData[noProduct].add) {
      const child = document.getElementById(`cart-item${noProduct}`);
      shoppingCartItems.removeChild(child);

      if (shoppingCartItems.children.length) {
        setTimeout(() => {
          shoppingCart.classList.add("active");
        }, 200);
      } else if (!shoppingCartItems.children.length) {
        orderProductsBtn.style.display = "none";
      }

      totalAmountItem();
      totalPriceItems();
      return (cartData[noProduct].add = false);
    } else {
      return;
    }
  });
}

function totalAmountItem() {
  let totalItem = 0;

  for (const item in cartData) {
    if (Object.hasOwnProperty.call(cartData, item)) {
      const { amount } = cartData[item];
      if (amount) {
        totalItem += amount;
      }
    }
  }

  amountCartItem.textContent = totalItem;
}

function totalPriceItems() {
  let totalPrice = 0;

  dataProducts.forEach(({ noProduct, discPrice }) => {
    if (cartData[noProduct].amount) {
      totalPrice += cartData[noProduct].amount * discPrice;
    }
  });

  amountTotalPrice.textContent = totalPrice > 0 ? totalPrice + "K" : "0";
}

// Click order product btn
orderProductsBtn.addEventListener("click", () => {
  const totalPriceOrdered = amountTotalPrice.textContent;
  const totalAmountOrdered = amountCartItem.textContent;
  let imgOrdered = "";
  dataProducts.forEach(({ noProduct, image }) => {
    if (cartData[noProduct].amount) {
      imgOrdered += `<img src="${image}" class="image-ordered" style="height: 7rem;"/>`;
    }
  });

  const elementSuccesModal = `<div class="modal-ordered">
                                <h1>Success <i class="fa-solid fa-circle-check"></i></h1>
                                <h2>You have ordered ${totalAmountOrdered} products at a price of ${totalPriceOrdered}</h2>
                                <div class="images-modal-ordered">
                                  ${imgOrdered}
                                </div>
                                <p>Thank you for ordering. We hope you have a pleasant day</p>
                              </div>`;

  dataProducts.forEach(({ noProduct }) => {
    cartData[noProduct].amount = 0;
    cartData[noProduct].add = false;
  });

  shoppingCartItems.innerHTML = "";
  amountCartItem.textContent = 0;
  amountTotalPrice.textContent = 0;
  orderProductsBtn.style.display = "none";
  setTimeout(() => {
    showModal(1, elementSuccesModal);
  }, 1000);
});
