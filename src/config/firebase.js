import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-storage'
import 'firebase/firestore'
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyB5dzXyDRhaZa9l2yarBcITkO0fCXTdF_U",
  authDomain: "agrokonnectproject.firebaseapp.com",
  projectId: "agrokonnectproject",
  storageBucket: "agrokonnectproject.appspot.com",
  messagingSenderId: "993454539899",
  appId: "1:993454539899:web:4893022cc184d5fea5cede"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth ();

  export const firestore = firebase.firestore ();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  export const facebookProvider = new firebase.auth.FacebookAuthProvider();

  export const storage = firebase.storage();