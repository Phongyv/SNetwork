// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore,getDocs,collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_DATABASE_URL ,
  projectId:"snetwork-80dc1",
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
  appId:"1:4309037337:web:d83f11eb6ecc83e94b5588",
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
const db = getFirestore(app)


  const querySnapshot = await getDocs(collection(db, "thumnail"));
  querySnapshot.forEach((doc) => {
      console.log(doc.data().name);
  });


const registerSubmit = () =>{
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
    console.log(user)
   alert('Đăng Ký Thành Công')
   window.location.pathname='/login'
  })
  .catch((error)=>{
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
    console.log(user)
   alert('Đăng Nhập Thành Công')
  localStorage.setItem('email',email)
   window.location.pathname='/home'
  })
  .catch((error)=>{
   
    const errorMessage = error.message;
    alert(errorMessage)
  })
}

export {analytics ,registerSubmit,loginSubmit}