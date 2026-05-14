// Firebase INIT
firebase.initializeApp({
  apiKey: "AIzaSyBRy6pd2rzftMLcLUUOTv0P3f9YBdqQvBA",
  authDomain: "plugwear-17ffc.firebaseapp.com",
  projectId: "plugwear-17ffc",
  storageBucket: "plugwear-17ffc.firebasestorage.app",
  messagingSenderId: "42517755726",
  appId: "1:42517755726:web:8ac214acbdb379d766d01f"
});

const auth = firebase.auth();
const db = firebase.firestore();

// ---------------- PRODUCTS ----------------
function loadProducts(){

  const container = document.getElementById("products");
  if(!container) return;

  db.collection("products").onSnapshot(snapshot=>{

    container.innerHTML="";

    snapshot.forEach(doc=>{
      let p = doc.data();

      container.innerHTML += `
        <div class="card">
          <img src="${p.image}">
          <h3>${p.name}</h3>
          <p>${p.price}€</p>

          <button onclick="addToCart('${doc.id}','${p.name}',${p.price})">
            Add to Cart
          </button>
        </div>
      `;
    });

  });
}

loadProducts();

// ---------------- CART ----------------
function addToCart(productId, name, price){

  const user = auth.currentUser;

  if(!user){
    alert("Duhet login 🔐");
    return;
  }

  db.collection("carts").add({
    userId: user.uid,
    productId,
    name,
    price,
    time: Date.now()
  });

  alert("Shtuar në cart 🛒");
}

// ---------------- AUTH (OPTIONAL) ----------------
function loginUser(){

  auth.signInWithEmailAndPassword(
    document.getElementById("email").value,
    document.getElementById("password").value
  )
  .then(()=>alert("Logged in 🔥"))
  .catch(e=>alert(e.message));
}

function registerUser(){

  auth.createUserWithEmailAndPassword(
    document.getElementById("email").value,
    document.getElementById("password").value
  )
  .then(()=>alert("Account created 🔥"))
  .catch(e=>alert(e.message));
}
