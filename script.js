const auth = firebase.auth();
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
function openLogin(){

  document.getElementById("loginBox").classList.toggle("active");

}

function login(){
document.querySelector(".checkout").onclick = function(){
  window.location.href = "checkout.html";
}
  alert("Welcome to PLUGWEAR");
  

}
function loadProducts(){

  const container = document.getElementById("products");

  db.collection("products").onSnapshot(snapshot => {

    container.innerHTML = "";

    snapshot.forEach(doc => {

      let p = doc.data();

      container.innerHTML += `
        <div class="card">
          <img src="${p.image}" />
          <h2>${p.name}</h2>
          <p>${p.price}€</p>
          <button onclick="addToCart('${p.name}')">
            Add To Cart
          </button>
        </div>
      `;

    });

  });

}

loadProducts();
