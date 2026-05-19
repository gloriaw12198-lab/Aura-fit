import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDppWVfPRPu1D3L7RXsh9gaZj1FSxT2n3s",
  authDomain: "aurafit-56427.firebaseapp.com",
  projectId: "aurafit-56427",
  storageBucket: "aurafit-56427.appspot.com",
  messagingSenderId: "822693919193",
  appId: "1:822693919193:web:985d636f7bc694b9d641c8",
  measurementId: "G-3DQNQ368VH",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);