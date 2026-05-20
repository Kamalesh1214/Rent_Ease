import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBghqk61P1kjV0hrsCy25D8Dl2AECbegU",
  authDomain: "rent-base-web.firebaseapp.com",
  projectId: "rent-base-web",
  storageBucket: "rent-base-web.firebasestorage.app",
  messagingSenderId: "413595771067",
  appId: "1:413595771067:web:829fce29d6e7e955e0499e",
  measurementId: "G-7FYNNXYJ0L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.auth = auth;
window.db = db;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.collection = collection;
window.addDoc = addDoc;