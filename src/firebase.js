import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjQ242lTJXDbO-PLr2Z-XHj1A2bn5jr6Q",
    authDomain: "wedding-wishes-1d7b1.firebaseapp.com",
    projectId: "wedding-wishes-1d7b1",
    storageBucket: "wedding-wishes-1d7b1.firebasestorage.app",
    messagingSenderId: "392661128089",
    appId: "1:392661128089:web:61b1d2a1ed9a312eaff908",
    measurementId: "G-YFNBQ18ZT7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
