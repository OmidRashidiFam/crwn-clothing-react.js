import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase'

const AuthpPage = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup() // after signin with google we get back a response obj
    const userDocRef = await createUserDocumentFromAuth(response.user) // create a doc with response.user=userAuth
    console.log('user doc ref:', userDocRef);
  }

  return (
    <div className="authPage">

      <h1>sign up page</h1>
      <button onClick={logGoogleUser}>
        sign up with Google Pupop
      </button>
    </div>
  );
}

export default AuthpPage;