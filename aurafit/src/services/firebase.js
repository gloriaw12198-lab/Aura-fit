// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDppWVfPRPu1D3L7RXsh9gaZj1FSxT2n3s",
  authDomain: "aurafit-56427.firebaseapp.com",
  projectId: "aurafit-56427",
  storageBucket: "aurafit-56427.firebasestorage.app",
  messagingSenderId: "822693919193",
  appId: "1:822693919193:web:985d636f7bc694b9d641c8",
  measurementId: "G-3DQNQ368VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);