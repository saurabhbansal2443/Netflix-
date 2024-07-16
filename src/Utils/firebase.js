// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiz0-rPs_AWt6GCI3AkEWdV5zhNiMewnU",
  authDomain: "netflix-ec58d.firebaseapp.com",
  projectId: "netflix-ec58d",
  storageBucket: "netflix-ec58d.appspot.com",
  messagingSenderId: "835993545506",
  appId: "1:835993545506:web:4ef5b4a63a2f46eea6137b",
  measurementId: "G-C7XVHB22HD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);