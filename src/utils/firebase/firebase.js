// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider
 } from "firebase/auth"

 import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
 } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY6dEsQzKKPXNNx_ciWJ3ZUXJFbC-XKjE",
  authDomain: "restaurant-sprintug.firebaseapp.com",
  projectId: "restaurant-sprintug",
  storageBucket: "restaurant-sprintug.appspot.com",
  messagingSenderId: "454973111009",
  appId: "1:454973111009:web:45267fc676faa64fb1d5a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);



//database
export const db = getFirestore()

// const createUserDocumentFromAuth = async (userAuth,additionalInformation)=>{
//   if(!userAuth) return;
//   const userDocRef = doc(db,"")
// }
const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
)=>{
  if(!userAuth)return;

}

// Sign Up method
export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth,email,password)
}

//Sign In method
export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return; // Check if user exists

  return await signInWithEmailAndPassword(auth,email,password)
}