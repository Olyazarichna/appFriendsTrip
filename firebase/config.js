import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFMI_5SL7GsCA6Rw8oVZDWMp6sgXeWKBo',
  authDomain: 'friendstrip-c8afe.firebaseapp.com',
  projectId: 'friendstrip-c8afe',
  storageBucket: 'friendstrip-c8afe.appspot.com',
  messagingSenderId: '842393918660',
  appId: '1:842393918660:web:415dce20c3b0027a473d91',
  measurementId: 'G-1BRVZN62ET',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Назви колекцій
const USERS_COLLECTION = 'users';
const TRIPS_COLlECTION = 'trips';

// Посилання на колекції
export const usersRef = collection(db, USERS_COLLECTION);
export const tripsRef = collection(db, TRIPS_COLlECTION);
