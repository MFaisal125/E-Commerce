// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOl8Ndw3J0-BD-sMD9iPUBj9Ynd3a6VZ4",
  authDomain: "e-commerce-app-40cf0.firebaseapp.com",
  projectId: "e-commerce-app-40cf0",
  storageBucket: "e-commerce-app-40cf0.appspot.com",
  messagingSenderId: "692475170849",
  appId: "1:692475170849:web:ad116e10268f9af6e81360",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
