let cart = [];

function addToCart(product){

  cart.push(product);

  document.getElementById("cart-count").innerText = cart.length;

  let cartItems = document.getElementById("cart-items");

  let item = document.createElement("p");

  item.innerText = product;

  cartItems.appendChild(item);
}

function openCart(){

  document.getElementById("cart").classList.toggle("active");

}
