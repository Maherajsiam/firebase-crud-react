// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfn_OfEVpSZ708F_KaQ8MpZhby81FVjec",
  authDomain: "fir-crud-da43e.firebaseapp.com",
  projectId: "fir-crud-da43e",
  storageBucket: "fir-crud-da43e.appspot.com",
  messagingSenderId: "904373426605",
  appId: "1:904373426605:web:3040d2cc0d8a7829f1a924",
  measurementId: "G-PNL1JWSZB5"
};


// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}