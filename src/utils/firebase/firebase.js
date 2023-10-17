// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth"

import {
    getFirestore,
} from "firebase/firestore"


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
// Initialize db
export const db = getFirestore(app)

export const auth = getAuth();

//Sign up
export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}