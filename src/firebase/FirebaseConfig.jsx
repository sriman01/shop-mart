// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy3hByx4u8290jMywVP4QI8m37_KwRnKM",
  authDomain: "shopmart-a87b0.firebaseapp.com",
  projectId: "shopmart-a87b0",
  storageBucket: "shopmart-a87b0.appspot.com",
  messagingSenderId: "29902736374",
  appId: "1:29902736374:web:9761f430e7b5724a9495d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
