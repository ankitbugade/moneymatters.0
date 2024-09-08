// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc} from "firebase/firestore"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "moneymatters-0.firebaseapp.com",
  projectId: "moneymatters-0",
  storageBucket: "moneymatters-0.appspot.com",
  messagingSenderId: "920279948088",
  appId: "1:920279948088:web:780acd4ef634431b6c3fcd",
  measurementId: "G-HYP2VS9CN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db, auth, provider, doc, setDoc, getDoc};