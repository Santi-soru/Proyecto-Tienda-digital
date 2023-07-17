
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD93tOGB0nxBrWPSBvFEkZiOLqFeKPrTMo",
  authDomain: "todo-equipos-3d.firebaseapp.com",
  projectId: "todo-equipos-3d",
  storageBucket: "todo-equipos-3d.appspot.com",
  messagingSenderId: "274385279094",
  appId: "1:274385279094:web:a14ee0c6364fb13bb3e757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)