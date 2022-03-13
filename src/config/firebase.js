import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCkDGiK9HMMGTEPlnJxnTRDSs3nHVayTcw",
  authDomain: "crwn-clothing-11651.firebaseapp.com",
  projectId: "crwn-clothing-11651",
  //TODO falta la referencia a la BD
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

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnap = userRef.get();

  if (!userSnap.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...addtionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  console.log(userSnap);

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const converCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, elem) => {
    accumulator[elem.title.toLowerCase()] = elem;
    return accumulator;
  }, {});
};
