// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore }from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBQKUQshPtKq39kv8sU3_LdU1Eq19uyioQ",
  authDomain: "reactchatapp-4ecec.firebaseapp.com",
  projectId: "reactchatapp-4ecec",
  storageBucket: "reactchatapp-4ecec.firebasestorage.app",
  messagingSenderId: "522838561160",
  appId: "1:522838561160:web:19ab8754ded7a92194aa3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth()
export  const db = getFirestore()