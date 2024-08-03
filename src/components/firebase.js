// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC98BddXpSYEojIeK2QHjp9BfjjMWreZwc",
  authDomain: "assignment-cef10.firebaseapp.com",
  projectId: "assignment-cef10",
  storageBucket: "assignment-cef10.appspot.com",
  messagingSenderId: "5780520590",
  appId: "1:5780520590:web:02046e00df5ab2553713df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;