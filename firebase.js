// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6U4PUdhME4WNWxagpJ_A4vi09I2ZMxd0",
  authDomain: "notes-29dca.firebaseapp.com",
  projectId: "notes-29dca",
  storageBucket: "notes-29dca.appspot.com",
  messagingSenderId: "216575726916",
  appId: "1:216575726916:web:52735e2c7f93905604b311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
