import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGEke9tw5eVwkCf76SKw8hSAXrzdxzh6Q",
  authDomain: "top-notch-robbie.firebaseapp.com",
  projectId: "top-notch-robbie",
  storageBucket: "top-notch-robbie.appspot.com",
  messagingSenderId: "685368596243",
  appId: "1:685368596243:web:092c02d0b98b8ed5dd6ce6",
  measurementId: "G-27862L09Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);
const analytics = getAnalytics(app);