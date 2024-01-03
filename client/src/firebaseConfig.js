import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDna0jzZyuqv1MURhClJ-Js7yMCYz-JG6A",
  authDomain: "top-notch-fence.firebaseapp.com",
  projectId: "top-notch-fence",
  storageBucket: "top-notch-fence.appspot.com",
  messagingSenderId: "520163314179",
  appId: "1:520163314179:web:f22da04aea649dd4091c36",
  measurementId: "G-CS539XT1HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);
const analytics = getAnalytics(app);