// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTD62AOL18Na-bXbe7k7SjlLJk-Ud2aNs",
  authDomain: "estatein-x.firebaseapp.com",
  projectId: "estatein-x",
  storageBucket: "estatein-x.firebasestorage.app",
  messagingSenderId: "17652001817",
  appId: "1:17652001817:web:d0036a6f9003e4c1344e88",
  measurementId: "G-SND564NLNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;