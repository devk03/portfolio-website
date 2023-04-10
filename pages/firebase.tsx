// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import {useCollectionData} from 'react-firebase-hooks/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCEtZ2X-eJJhWXxhb1Oqi0Eep7W61xnllA",
  authDomain: "personal-3d666.firebaseapp.com",
  projectId: "personal-3d666",
  storageBucket: "personal-3d666.appspot.com",
  messagingSenderId: "1090668948509",
  appId: "1:1090668948509:web:9bd040d0c4f49fd656aaf4",
  measurementId: "G-6BXMSXCBYM"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
function writeUserData() {
    const db = getDatabase();
    set(ref(db, 'users/' + 1), {
      username: "test",
      email: "test@umich.edu",
    });
  }
