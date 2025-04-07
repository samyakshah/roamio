// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkWLWGM0oXoyRyz8BW6kBkDsuImBqsfxQ",
  authDomain: "roamio-hello.firebaseapp.com",
  projectId: "roamio-hello",
  storageBucket: "roamio-hello.firebasestorage.app",
  messagingSenderId: "92488078107",
  appId: "1:92488078107:web:3cde206757f5094eb7f9be",
  measurementId: "G-MVDV1TKE80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);