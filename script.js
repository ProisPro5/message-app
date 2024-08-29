// script.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const auth = getAuth();
const firestore = getFirestore();

document.getElementById('signup-btn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(firestore, "users", user.uid), { username: username });
        alert('Sign Up Successful');
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('main-section').style.display = 'block';
        document.getElementById('user-name').innerText = username;
    } catch (error) {
        console.error('Error signing up:', error);
    }
});

document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        const userData = userDoc.data();
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('main-section').style.display = 'block';
        document.getElementById('user-name').innerText = userData.username;
    } catch (error) {
        console.error('Error logging in:', error);
    }
});

document.getElementById('google-login-btn').addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userDoc = await getDoc(doc(firestore, "users", user.uid));
        if (!userDoc.exists()) {
            await setDoc(doc(firestore, "users", user.uid), { username: user.displayName });
        }
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('main-section').style.display = 'block';
        document.getElementById('user-name').innerText = user.displayName;
    } catch (error) {
        console.error('Error logging in with Google:', error);
    }
});

document.getElementById('send-btn').addEventListener('click', async () => {
    const recipientUsername = document.getElementById('recipient').value;
    const message = document.getElementById('message').value;

    // Get sender's UID from auth
    const user = auth.currentUser;
    if (!user) {
        alert('Please log in first');
        return;
    }

    // Find recipient's UID
    const recipientSnapshot = await getDoc(doc(firestore, "users", recipientUsername));
    if (!recipientSnapshot.exists()) {
        alert('Recipient not found');
        return;
    }
    const recipientUID = recipientSnapshot.id;

    try {
        await setDoc(doc(firestore, "messages", `${user.uid}_${recipientUID}`), {
            sender: user.uid,
            recipient: recipientUID,
            message: message,
            timestamp: new Date()
        });
        alert('Message sent');
    } catch (error) {
        console.error('Error sending message:', error);
    }
});
