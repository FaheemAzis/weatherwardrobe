// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmnqjXlksqhtHumP8WyKcTMsJ_hY7ys2E",
  authDomain: "faheemfirebase-7e868.firebaseapp.com",
  projectId: "faheemfirebase-7e868",
  storageBucket: "faheemfirebase-7e868.appspot.com",
  messagingSenderId: "804165468060",
  appId: "1:804165468060:web:a6f9a3c79013605c9dd259",
  measurementId: "G-FEG0FPGY1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)