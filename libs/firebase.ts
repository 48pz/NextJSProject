// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMOQzd9fIhPsRW2JfLb1eeEUBGidVxbts",
  authDomain: "o-mart-944f1.firebaseapp.com",
  projectId: "o-mart-944f1",
  storageBucket: "o-mart-944f1.firebasestorage.app",
  messagingSenderId: "42447573548",
  appId: "1:42447573548:web:4672c77cfa89a4f9c37789"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;