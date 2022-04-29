// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDrgkcpaRUONlvU68duiH_7-kT8E_hxvTM",
  authDomain: "likeit-login.firebaseapp.com",
  projectId: "likeit-login",
  storageBucket: "likeit-login.appspot.com",
  messagingSenderId: "934118781556",
  appId: "1:934118781556:web:1fda14b2058c2d87941721",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

