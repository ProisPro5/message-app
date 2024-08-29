// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIwzX0EoWK54b9wvC_0BEAGiQZoI2yZjU",
  authDomain: "messaging-app-8bc67.firebaseapp.com",
  databaseURL: "https://messaging-app-8bc67-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "messaging-app-8bc67",
  storageBucket: "messaging-app-8bc67.appspot.com",
  messagingSenderId: "393710752094",
  appId: "1:393710752094:web:0df99ac9ecedbf39b73fcf",
  measurementId: "G-E4SSQ97H5W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
