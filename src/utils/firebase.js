// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflixgpt-movies.firebaseapp.com",
  projectId: "netflixgpt-movies",
  storageBucket: "netflixgpt-movies.firebasestorage.app",
  messagingSenderId: "598867340560",
  appId: "1:598867340560:web:faf8b8d912c7cdeaf64995",
  measurementId: "G-SC45D313R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();