// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAst8ySuTHAh_nvrsMYlGFbiAojOp8KzfE",
  authDomain: "tagit-71258.firebaseapp.com",
  projectId: "tagit-71258",
  storageBucket: "tagit-71258.appspot.com",
  messagingSenderId: "281740746390",
  appId: "1:281740746390:web:45481dc51de3f3f689ecb7",
  measurementId: "G-F0GDTFESGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);