import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "Your_API_Key",
    authDomain: "room-management-firstapp.firebaseapp.com",
    projectId: "room-management-firstapp",
    storageBucket: "room-management-firstapp.firebasestorage.app",
    messagingSenderId: "550589233156",
    appId: "1:550589233156:web:762c53a3b7e499979c1d51"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
