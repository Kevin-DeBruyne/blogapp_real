// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiMnKyPFpADR6gY2ddtd1CpsljZdvSS5Q",
  authDomain: "blogproject-14f4b.firebaseapp.com",
  projectId: "blogproject-14f4b",
  storageBucket: "blogproject-14f4b.appspot.com",
  messagingSenderId: "83074922866",
  appId: "1:83074922866:web:4f397bdb09d88c57aa45eb",
  measurementId: "G-Z0VS9S03E0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
