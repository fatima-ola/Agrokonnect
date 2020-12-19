import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyDzVBVNBaP1GSGhx54P9t3jAEheTmA4SU8",
    authDomain: "agrokonnect-be837.firebaseapp.com",
    projectId: "agrokonnect-be837",
    storageBucket: "agrokonnect-be837.appspot.com",
    messagingSenderId: "531997305314",
    appId: "1:531997305314:web:99cf357cd4cad029f5b1bb"
  };

firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  export const provider = new firebase.auth.GoogleAuthProvider();