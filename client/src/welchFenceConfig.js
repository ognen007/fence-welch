import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_0Zjo_VZzsAYfLfzAxfvZ66pXvBnPLPo",
  authDomain: "welch-fence.firebaseapp.com",
  projectId: "welch-fence",
  storageBucket: "welch-fence.appspot.com",
  messagingSenderId: "125869970743",
  appId: "1:125869970743:web:afba552f0e19c8a1bc36b2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}