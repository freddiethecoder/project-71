import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBGnwLCXetH86bJvPtGVFr8tTYoGDr-s_8",
    authDomain: "e-ride-stage-4-7a10e.firebaseapp.com",
    databaseURL: "https://e-ride-stage-4-7a10e-default-rtdb.firebaseio.com",
    projectId: "e-ride-stage-4-7a10e",
    storageBucket: "e-ride-stage-4-7a10e.appspot.com",
    messagingSenderId: "658463103266",
    appId: "1:658463103266:web:8ecc54b9dc54143d27ad7b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
