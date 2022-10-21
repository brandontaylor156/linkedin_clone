import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSfx3izry38ewUG6pj_3LI8o4J5GETCX0",
    authDomain: "linkedin-clone-5fcbc.firebaseapp.com",
    projectId: "linkedin-clone-5fcbc",
    storageBucket: "linkedin-clone-5fcbc.appspot.com",
    messagingSenderId: "720262950680",
    appId: "1:720262950680:web:2296bf083c5a443933b86d",
    measurementId: "G-5SDCQCR01B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};