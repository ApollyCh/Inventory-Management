// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANJLDf9txyAU8N1Y8jT7cFY6Ny1szHC9s",
  authDomain: "inventory-manager-b4ad1.firebaseapp.com",
  projectId: "inventory-manager-b4ad1",
  storageBucket: "inventory-manager-b4ad1.appspot.com",
  messagingSenderId: "661733570798",
  appId: "1:661733570798:web:73df74cd973d17fb34dbff",
  measurementId: "G-06C0XGZQJ0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;