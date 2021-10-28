import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAF-8qS31S49AiGQyDQbhTZExJY2KdnFY",
  authDomain: "tu-motor.firebaseapp.com",
  projectId: "tu-motor",
  storageBucket: "tu-motor.appspot.com",
  messagingSenderId: "938397872801",
  appId: "1:938397872801:web:394e1734b44e81ab90b6e0",
  measurementId: "G-NV06K5W9XP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { app, db, googleAuthProvider };
