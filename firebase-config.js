// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIwzX0EoWK54b9wvC_0BEAGiQZoI2yZjU",
  authDomain: "messaging-app-8bc67.firebaseapp.com",
  projectId: "messaging-app-8bc67",
  storageBucket: "messaging-app-8bc67.appspot.com",
  messagingSenderId: "393710752094",
  appId: "1:393710752094:web:0df99ac9ecedbf39b73fcf",
  measurementId: "G-E4SSQ97H5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
