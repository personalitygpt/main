// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy4osYYXV17Rz_6DeZMyzUGox5RDzzaRA",
  authDomain: "personalitygpt.firebaseapp.com",
  databaseURL: "https://personalitygpt-default-rtdb.firebaseio.com",
  projectId: "personalitygpt",
  storageBucket: "personalitygpt.appspot.com",
  messagingSenderId: "474907213935",
  appId: "1:474907213935:web:879b2aeac39b27968ecd9a",
  measurementId: "G-QM6N9D6DE6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);