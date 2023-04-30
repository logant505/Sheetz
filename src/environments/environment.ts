export const environment={
  firebase: {
    projectId: 'sheetz-6c1c5',
    appId: '1:24796851856:web:47f4521741a890d6377215',
    databaseURL: 'https://sheetz-6c1c5-default-rtdb.firebaseio.com',
    storageBucket: 'sheetz-6c1c5.appspot.com',
    apiKey: 'AIzaSyC3M6jioxH8SLDg6ZT-NIVi4utWQMhVKoQ',
    authDomain: 'sheetz-6c1c5.firebaseapp.com',
    messagingSenderId: '24796851856',
    measurementId: 'G-REZ0DYBTM0',
  },
    production:false
}// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebase= {
  apiKey: "AIzaSyC3M6jioxH8SLDg6ZT-NIVi4utWQMhVKoQ",
  authDomain: "sheetz-6c1c5.firebaseapp.com",
  databaseURL: "https://sheetz-6c1c5-default-rtdb.firebaseio.com",
  projectId: "sheetz-6c1c5",
  storageBucket: "sheetz-6c1c5.appspot.com",
  messagingSenderId: "24796851856",
  appId: "1:24796851856:web:47f4521741a890d6377215",
  measurementId: "G-REZ0DYBTM0"
};

// Initialize Firebase
const app = initializeApp(firebase);
const analytics = getAnalytics(app);