// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC79blgjVvxCr9b-_DmPOp8iMaIufSHVSk",
    authDomain: "mui-dashboard-fbe2d.firebaseapp.com",
    projectId: "mui-dashboard-fbe2d",
    storageBucket: "mui-dashboard-fbe2d.appspot.com",
    messagingSenderId: "799990441090",
    appId: "1:799990441090:web:22c494eee9c174cbddc09b",
    measurementId: "G-MPG6RL02F0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
