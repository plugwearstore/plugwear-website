const auth = firebase.auth();

function registerUser(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Account created 🔥");
    })
    .catch(err => alert(err.message));
}

function loginUser(){
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Logged in 🔥");
      document.getElementById("loginBox").classList.remove("active");
    })
    .catch(err => alert(err.message));
}

function logout(){
  auth.signOut();
  alert("Logged out");
}
const auth = firebase.auth();
