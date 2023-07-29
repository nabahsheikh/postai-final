// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEjRvugTasEDzQ34kRc1wB-10M149V2TU",
  authDomain: "post-ai.firebaseapp.com",
  projectId: "post-ai",
  storageBucket: "post-ai.appspot.com",
  messagingSenderId: "516495113183",
  appId: "1:516495113183:web:60e23362fae4846a4b626a",
  measurementId: "G-T9NYRLLM9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);