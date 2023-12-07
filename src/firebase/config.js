import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDUcngY1f0fG9AJQYumIbBib1ojfN0p_NM",
  authDomain: "chicart-coderhouse.firebaseapp.com",
  projectId: "chicart-coderhouse",
  storageBucket: "chicart-coderhouse.appspot.com",
  messagingSenderId: "361813429037",
  appId: "1:361813429037:web:ab61fceb8e63e45f6521a4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);