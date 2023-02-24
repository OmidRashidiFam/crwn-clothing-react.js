import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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

const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response.user);
  return response;
};

// initialize firestore
const db = getFirestore();
const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
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
      console.log("Error creating the user", error.message);
    }
  }

  // user dose exist
  return userDocRef;
};

// exporting out
export {
  auth,
  signInWithGooglePopup,
  db,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
};
