// Toggle Class Active Navbar Menu
const menu = document.querySelector("#burger");
const navbarNav = document.querySelector(".navbar-nav");

const search = document.querySelector("#search");
const searchBox = document.querySelector(".search-form");

const shopCart = document.querySelector("#shopping-cart");
const shopCartBar = document.querySelector(".shopping-cart");
const cartItems = document.querySelectorAll(".cart-item");
const removeItems = document.querySelectorAll("#remove");

// Toggle Class Active Navbar Menu
menu.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

// Toggle Class Active Search
search.addEventListener("click", (e) => {
  searchBox.classList.toggle("active");
  e.preventDefault();
});

// Toggle Class Active Shopping Cart
shopCart.addEventListener("click", (e) => {
  shopCartBar.classList.toggle("active");
  e.preventDefault();
});

// Click outside sidebar
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchBox.contains(e.target) && !search.contains(e.target)) {
    searchBox.classList.remove("active");
  }
  if (!shopCartBar.contains(e.target) && !shopCart.contains(e.target)) {
    shopCartBar.classList.remove("active");
  }
});

const itemModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll("#item-detail-button");

for (itemDetailButton of itemDetailButtons) {
  itemDetailButton.addEventListener("click", (e) => {
    itemModal.style.display = "flex";
    e.preventDefault();
  });
}

const closeBtn = document.querySelector(".modal .close-icon");
closeBtn.addEventListener("click", (e) => {
  itemModal.style.display = "none";
  e.preventDefault();
});

window.addEventListener("click", (e) => {
  if (e.target === itemModal) {
    itemModal.style.display = "none";
  }
});
