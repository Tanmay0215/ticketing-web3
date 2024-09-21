import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk--aijc3iuCTAHcbycCe3I171ELxq1S8",
  authDomain: "innovortex-59799.firebaseapp.com",
  projectId: "innovortex-59799",
  storageBucket: "innovortex-59799.appspot.com",
  messagingSenderId: "1005335065169",
  appId: "1:1005335065169:web:182824309eb5a3acd5fe70",
  measurementId: "G-YPH8XD6N00"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {auth,db}