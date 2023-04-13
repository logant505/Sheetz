export const environment={
    production:true
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY6qMEVy_iQrX03v9zyx7nSwP3suYMIxg",
  authDomain: "pet-shelter-app-1ab3f.firebaseapp.com",
  databaseURL: "https://pet-shelter-app-1ab3f-default-rtdb.firebaseio.com",
  projectId: "pet-shelter-app-1ab3f",
  storageBucket: "pet-shelter-app-1ab3f.appspot.com",
  messagingSenderId: "1087461841151",
  appId: "1:1087461841151:web:3b3721f61b2ccab34e94ca",
  measurementId: "G-P7F81Z6HSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);