// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4vdXa8vTwWV_aPZPUDXDfMGutt-9Ktgc",
  authDomain: "dragon-news-8021b.firebaseapp.com",
  projectId: "dragon-news-8021b",
  storageBucket: "dragon-news-8021b.appspot.com",
  messagingSenderId: "516656390732",
  appId: "1:516656390732:web:3c780baa61925bcad4cae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app