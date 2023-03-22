import { initializeApp } from "firebase/app";
import { getAuth } from "firebase-auth";


const firebaseConfig = {
  apiKey: "AIzaSyBxQc43IyLIFAaF4MGZ7LMBBtsWq5iczA4",
  authDomain: "chatapp-35ac2.firebaseapp.com",
  projectId: "chatapp-35ac2",
  storageBucket: "chatapp-35ac2.appspot.com",
  messagingSenderId: "102904496328",
  appId: "1:102904496328:web:db657ef3ffc3600657e5fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth();