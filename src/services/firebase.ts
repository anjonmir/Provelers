// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa5gSmEEYrb9verc0HNDDcibvb5xojaNg",
  authDomain: "provelers.firebaseapp.com",
  projectId: "provelers",
//   storageBucket: "provelers.firebasestorage.app",
//   messagingSenderId: "49137533540",
  appId: "1:49137533540:web:6d5d905d8ccd207baa9571",
//   measurementId: "G-8RPRM4FJ9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);