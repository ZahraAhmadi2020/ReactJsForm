// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDeDAl9OfuluV9T4bA6vDdPog_FPFYW_vE",
  authDomain: "exchange-f868c.firebaseapp.com",
  databaseURL: "https://exchange-f868c-default-rtdb.firebaseio.com",
  projectId: "exchange-f868c",
  storageBucket: "exchange-f868c.appspot.com",
  messagingSenderId: "489577616957",
  appId: "1:489577616957:web:d878768dea35803143fc54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



export default app;
