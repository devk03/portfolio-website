/*
THIS IS WHERE FIREBASE IS INITIALIZED
*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// This code is all gitignored, to protect my private keys

// Adds the Firestore SDK
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEtZ2X-eJJhWXxhb1Oqi0Eep7W61xnllA",
  authDomain: "personal-3d666.firebaseapp.com",
  databaseURL: "https://personal-3d666-default-rtdb.firebaseio.com",
  projectId: "personal-3d666",
  storageBucket: "personal-3d666.appspot.com",
  messagingSenderId: "1090668948509",
  appId: "1:1090668948509:web:9bd040d0c4f49fd656aaf4",
  measurementId: "G-6BXMSXCBYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the Database, and then export it
export const db = getFirestore(app);