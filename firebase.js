//Version 9
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTp-Gx5UZSBJKcvkHeIxc2K5N9Aq3ocYg",
  authDomain: "habittracker-59231.firebaseapp.com",
  projectId: "habittracker-59231",
  storageBucket: "habittracker-59231.appspot.com",
  messagingSenderId: "404079753933",
  appId: "1:404079753933:web:ce8341748e1949ebfbc784",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db, auth };
