// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"

import {
    doc, //retrieve doc from db
    getDoc, //getting the document's data
    getFirestore,
    setDoc, //setting the document's data
} from "firebase/firestore"

//import { projectAuth } from "firebase/remote-config"


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

export const auth = getAuth();

// Initialize db
export const db = getFirestore()



//create user document from auth
export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={})=>{
    if(!userAuth) return;

    const userDocRef = doc(db,"users",userAuth.uid); //actual instance of the doc -- doc(database,"collection",uniqueID)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef) //data object containing data from the userDocRef document
    
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    //if user data exists

    //if user data doesnt exist
    //create / set the doc with the data from userAuth in my collection
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    //return userDocRef
    return userDocRef;
}

//Sign up
export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}

//Sign in
export const signinAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password);
}