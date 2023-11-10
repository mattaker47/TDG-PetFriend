// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tdg-petfriend.firebaseapp.com",
  projectId: "tdg-petfriend",
  storageBucket: "tdg-petfriend.appspot.com",
  messagingSenderId: "847173205092",
  appId: "1:847173205092:web:ea6d89988796b96e55f371"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);