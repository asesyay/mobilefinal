// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNDwoLYYeFxWic0cwNJX4E0ZChiy82FCY",
  authDomain: "finalproject-3de7a.firebaseapp.com",
  projectId: "finalproject-3de7a",
  storageBucket: "finalproject-3de7a.appspot.com",
  messagingSenderId: "677055825442",
  appId: "1:677055825442:web:feedd1f82859d134802c7b",
  measurementId: "G-MP8EHYX141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

