// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD67uoFdwtDeWNET0jRLJUnw5YcDrnIis",
  authDomain: "facebook-clone-ytx.firebaseapp.com",
  projectId: "facebook-clone-ytx",
  storageBucket: "facebook-clone-ytx.appspot.com",
  messagingSenderId: "340883250726",
  appId: "1:340883250726:web:3f27b9b4acfada7a89d0e7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore(app);
const storage = getStorage();
export { app, storage, db };
