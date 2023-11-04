
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYgBG7AGUmt-aRE-BxkhZCzjojxQ5keCs",
  authDomain: "archi-e8c55.firebaseapp.com",
  projectId: "archi-e8c55",
  storageBucket: "archi-e8c55.appspot.com",
  messagingSenderId: "313781329145",
  appId: "1:313781329145:web:30b63947855f2717c9d628",
  measurementId: "G-Z2XDNBMXP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
