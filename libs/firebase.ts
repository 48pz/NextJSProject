// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOc9G8lEdipBQaQiblpnVOGdNIB5eeBX4",
  authDomain: "e-shop-video.firebaseapp.com",
  projectId: "e-shop-video",
  storageBucket: "e-shop-video.firebasestorage.app",
  messagingSenderId: "892179014332",
  appId: "1:892179014332:web:616140706405f73bf766b9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;