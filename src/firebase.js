// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signInAnonymously} from "firebase/auth";

const firebaseConfig = {
  apiKey:"AIzaSyBhXvtCklDMDL051siPiDYVqzTEAq4mQRk",
  authDomain: "snetwork-80dc1.firebaseapp.com",
  databaseURL: "https://snetwork-80dc1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "snetwork-80dc1",
  storageBucket: "snetwork-80dc1.appspot.com",
  messagingSenderId: "4309037337",
  appId: "1:4309037337:web:d83f11eb6ecc83e94b5588",
  measurementId: "G-E8R825D7NR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);

const registerSubmit = () =>{
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
   alert('User Registed')
   window.location.pathname='/login'
  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  })
}

const loginSubmit = () =>{
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
   alert('Login Success')
   window.location.pathname='/home'
  })
  .catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  })
}

export {analytics ,registerSubmit,loginSubmit}