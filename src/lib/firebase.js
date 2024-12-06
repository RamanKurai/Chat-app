import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-b8bed.firebaseapp.com",
  projectId: "reactchatapp-b8bed",
  storageBucket: "reactchatapp-b8bed.firebasestorage.app",
  messagingSenderId: "563926000991",
  appId: "1:563926000991:web:3956cc11a903d7b95982ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);