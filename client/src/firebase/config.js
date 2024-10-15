// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_API_KEY,
  authDomain: "m26vue-d98dd.firebaseapp.com",
  projectId: "m26vue-d98dd",
  storageBucket: "m26vue-d98dd.appspot.com",
  messagingSenderId: "287800246440",
  appId: "1:287800246440:web:4c6f3cf806cdadb370c29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;