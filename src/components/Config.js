import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB-ZuJtABXwzcrgFlPtESkeQHd_I0zM1Qk",
  authDomain: "auth-75cd0.firebaseapp.com",
  projectId: "auth-75cd0",
  storageBucket: "auth-75cd0.appspot.com",
  messagingSenderId: "134116646187",
  appId: "1:134116646187:web:3334ceedb9495e2d71f96e",
  measurementId: "G-D7NMCKQNM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth , provider}
