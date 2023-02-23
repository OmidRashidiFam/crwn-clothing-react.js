import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
const auth = getAuth();
// setup Google authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// initialize firestore
const db = getFirestore();
const createUserDocumentFromAuth = async (userAuth) => {
  // address for the doc
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("user doc ref:", userDocRef);

  // geting snapshot using the address
  const userSnapShot = await getDoc(userDocRef);
  console.log("user doc:", userSnapShot);

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
      });
    } catch (error) {
      // log to the console any error
      console.log("Error creating the user", error.message);
    }
  }

  // user dose exist
  return userDocRef;
};

// exporting out
export { auth, signInWithGooglePopup, db, createUserDocumentFromAuth };
