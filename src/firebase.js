import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9pCFYodMuH8CpSEKw96UZ5E6nlVTGdLo",
    authDomain: "linkedin-clone-2171d.firebaseapp.com",
    projectId: "linkedin-clone-2171d",
    storageBucket: "linkedin-clone-2171d.appspot.com",
    messagingSenderId: "1061958721881",
    appId: "1:1061958721881:web:8cd3b696ec43223a07ec48"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firestore and Auth instances
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };