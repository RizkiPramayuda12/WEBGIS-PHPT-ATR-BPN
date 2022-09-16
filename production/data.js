// setting up firebase with our website
const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCExoARfUyGU6R94Cbwa84aeHDLPT3832k",
  authDomain: "signupprojectrizki.firebaseapp.com",
  projectId: "signupprojectrizki",
  storageBucket: "signupprojectrizki.appspot.com",
  messagingSenderId: "281241380723",
  appId: "1:281241380723:web:5376f23c5210cdc2d9c706"
  });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("Akun anda sudah terdaftar, silakan refresh kembali halaman ini dan klik Sign In")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            console.log(result);
            location.href = "index1.html";
            alert ("Akun Anda Sudah Terdaftar Silakan Masuk");
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            alert ("Akun Belum Terdaftar atau Salah Memasukan Email dan Password");
        });
}