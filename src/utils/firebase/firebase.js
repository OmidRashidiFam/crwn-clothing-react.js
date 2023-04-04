import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXwOmB2ejfXrn24jjr34LwA_QYTO9vmh0",
  authDomain: "crwn-clothing-db-a8cb4.firebaseapp.com",
  projectId: "crwn-clothing-db-a8cb4",
  storageBucket: "crwn-clothing-db-a8cb4.appspot.com",
  messagingSenderId: "181558631907",
  appId: "1:181558631907:web:30f04f193e293da161d4d6",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize firebase authentication
export const auth = getAuth();

// setup Google authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};

// setup the sign out user
export const signOutUser = async () => await signOut(auth);

// setup a listener for auth state
export const onAuthStateChangeListener = (callBackFunc) => {
  onAuthStateChanged(auth, callBackFunc);
};

// initialize firestore
export const db = getFirestore();

// create a new collections and documents
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  // address for the collection
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    // address for the doc using collection collection
    const docRef = doc(collectionRef, object.title.toLowerCase());

    // set the doc to be object on doc address
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done with setting collections and docs");
};

// get back the collections and documents from
export const getCollectionAndDocument = async () => {
  // address for the collection
  const collectionRef = collection(db, "categories");
  // a query for the collection
  const q = query(collectionRef);
  // get a snap shot
  const querySnapShot = await getDocs(q);
  // creating a new obj for the category collection
  const categoryMapedObj = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();

    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMapedObj;
};

// create the user document
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  // address for the doc
  const userDocRef = doc(db, "users", userAuth.uid);

  // geting snapshot using the address
  const userSnapShot = await getDoc(userDocRef);

  // if user dose not exist
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // seting a doc using the address
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // user dose exist
  return userDocRef;
};
