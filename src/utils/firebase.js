// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoUSPQ3454ZljvsXQsXDGPyrpqNd1qEUg",
  authDomain: "cinescope-gpt.firebaseapp.com",
  projectId: "cinescope-gpt",
  storageBucket: "cinescope-gpt.appspot.com",
  messagingSenderId: "105719167723",
  appId: "1:105719167723:web:db0bfab0b3c20d8bd19cae",
  measurementId: "G-0M3LCCSNZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);