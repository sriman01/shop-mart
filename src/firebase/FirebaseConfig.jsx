// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1uVjNldPSubS7omOokxWOfSrEr4I23ho",
  authDomain: "myfirstproject-d9d53.firebaseapp.com",
  projectId: "myfirstproject-d9d53",
  storageBucket: "myfirstproject-d9d53.appspot.com",
  messagingSenderId: "613904043692",
  appId: "1:613904043692:web:f1aede4081a9fd97a5d909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}