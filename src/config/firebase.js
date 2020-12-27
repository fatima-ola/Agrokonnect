import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-storage'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyDMOotKS4360-TGRxmjbDnuaLUiVlhbpHw",
    authDomain: "agrokonnectapp.firebaseapp.com",
    projectId: "agrokonnectapp",
    storageBucket: "agrokonnectapp.appspot.com",
    messagingSenderId: "337831597598",
    appId: "1:337831597598:web:a40be83c67fd5ba8d2400f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth ();

  export const firestore = firebase.firestore ();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const facebookProvider = new firebase.auth.FacebookAuthProvider();