import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7aaFwvR8bgjnoBb_CuFtSBk1h-TE6iQA",
    authDomain: "platzi-auth-35244.firebaseapp.com",
    projectId: "platzi-auth-35244",
    storageBucket: "platzi-auth-35244.firebasestorage.app",
    messagingSenderId: "74456205959",
    appId: "1:74456205959:web:1ed9da12d239d97f490622",
    measurementId: "G-N8BEVK8VHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);