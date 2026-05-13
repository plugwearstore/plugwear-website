let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " u shtua në cart!");
  saveCart();
}

function saveCart() {
  localStorage.setItem("plugwearCart", JSON.stringify(cart));
}

function loadCart() {
  let saved = localStorage.getItem("plugwearCart");
  if (saved) {
    cart = JSON.parse(saved);
  }
}

loadCart();
