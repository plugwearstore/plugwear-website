const firebaseConfig = {
  apiKey: "AIzaSyBRy6pd2rzftMLcLUUOTv0P3f9YBdqQvBA",
  authDomain: "plugwear-17ffc.firebaseapp.com",
  projectId: "plugwear-17ffc",
  storageBucket: "plugwear-17ffc.firebasestorage.app",
  messagingSenderId: "42517755726",
  appId: "1:42517755726:web:8ac214acbdb379d766d01f"
};

// INIT FIREBASE
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// -------------------- LOGIN --------------------

function loginUser(){

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Logged in 🔥");
      document.getElementById("loginBox").style.display = "none";
    })
    .catch(err => alert(err.message));
}

function registerUser(){

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Account created 🔥");
    })
    .catch(err => alert(err.message));
}

// -------------------- PRODUCTS --------------------

function loadProducts(){

  const container = document.getElementById("products");

  if(!container) return;

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
            Add to Cart
          </button>
        </div>
      `;

    });

  });
}

loadProducts();

// -------------------- CART --------------------

function addToCart(product, price){

  const user = auth.currentUser;

  if(!user){
    alert("Duhet login 🔐");
    return;
  }

  db.collection("carts").add({
    userId: user.uid,
    product: product,
    price: price,
    time: Date.now()
  });

  alert("Shtuar në cart 🛒");
}
  });

  alert("Shtuar në cart 🛒");
}

// -------------------- CART COUNTER (OPTIONAL) --------------------

function openCart(){
  document.getElementById("cart").classList.toggle("active");
}
