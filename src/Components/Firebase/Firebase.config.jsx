import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjIsKnzkfPYLJtqai3XCwOHchGloTxUyg",
  authDomain: "car-doctor-40ed6.firebaseapp.com",
  projectId: "car-doctor-40ed6",
  storageBucket: "car-doctor-40ed6.appspot.com",
  messagingSenderId: "168388194548",
  appId: "1:168388194548:web:b2af5d546408bcb068eea1",
  measurementId: "G-MSQ82GKRXL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
