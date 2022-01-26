import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCkDGiK9HMMGTEPlnJxnTRDSs3nHVayTcw",
  authDomain: "crwn-clothing-11651.firebaseapp.com",
  projectId: "crwn-clothing-11651",
  storageBucket: "crwn-clothing-11651.appspot.com",
  messagingSenderId: "286731554721",
  appId: "1:286731554721:web:acc3ab52c659380d51c5e0",
};

//TODO actualizar a la última versión de firebase. En el getting started se da un ejemplo sencillo del nuevo funcionamiento
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
