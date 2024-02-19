// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgMWUAPx_w3XQllkan7e_YhcQWzDohbyI",
  authDomain: "e-commerce-73b4b.firebaseapp.com",
  projectId: "e-commerce-73b4b",
  storageBucket: "e-commerce-73b4b.appspot.com",
  messagingSenderId: "282043286747",
  appId: "1:282043286747:web:1a39f4801d4d9ebaefb8fe",
  measurementId: "G-JPVXL8NC7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);