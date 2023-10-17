// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth"

import {
    doc,
    getDoc,
    getFirestore,
    setDoc,
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

export const auth = getAuth();

// Initialize db
export const db = getFirestore(app)



//create user from auth
export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={})=>{
    if(!userAuth) return;

    const userDocRef = doc(db,"users",userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName,email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        }catch(error){console.log(error.message)}
    }
}

//Sign up
export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);
}