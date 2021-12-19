// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC4UEYTTheaOr6Xi5YVKPjLtQoTlXhN8Ns",
    authDomain: "timee-e4b5f.firebaseapp.com",
    projectId: "timee-e4b5f",
    storageBucket: "timee-e4b5f.appspot.com",
    messagingSenderId: "1069214887909",
    appId: "1:1069214887909:web:6742d17368a839b99d890c",
    measurementId: "G-TXNPVKL5KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)


export {app, analytics, db, auth, firebaseConfig}