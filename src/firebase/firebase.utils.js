import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
 apiKey: "AIzaSyDZjeyMLijzfisJhkmUsuYEL57wXctCMBI",
  authDomain: "crwn-db-114e2.firebaseapp.com",
  projectId: "crwn-db-114e2",
  storageBucket: "crwn-db-114e2.appspot.com",
  messagingSenderId: "603381588055",
  appId: "1:603381588055:web:8b17386fd4c70e7c124312",
  measurementId: "G-S123SS6J60"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firstore();


