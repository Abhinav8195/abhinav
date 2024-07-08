// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ_o5O2ZGn3vrWwCaf528RWsUHs-V5pNA",
  authDomain: "netflix-clone-166ac.firebaseapp.com",
  projectId: "netflix-clone-166ac",
  storageBucket: "netflix-clone-166ac.appspot.com",
  messagingSenderId: "275383261325",
  appId: "1:275383261325:web:d39341bc71150f6e9aeac4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage and export it
export const storage = getStorage(app);
