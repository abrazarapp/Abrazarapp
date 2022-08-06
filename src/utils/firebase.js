// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrBMmNfI-VVViU1Q3ZAf0cqG2b0b-cSNw",
  authDomain: "abrazar-app.firebaseapp.com",
  projectId: "abrazar-app",
  storageBucket: "abrazar-app.appspot.com",
  messagingSenderId: "118775508260",
  appId: "1:118775508260:web:68bf72ea7c3c9f5ab757b1",
  measurementId: "G-TZK5LCYRTR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
