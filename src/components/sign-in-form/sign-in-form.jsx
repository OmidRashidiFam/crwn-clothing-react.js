import { useState } from "react";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import "./sign-in-form.scss";
import { serverTimestamp } from "firebase/firestore";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // initial useState
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // handeler function
  const handleChange = (event) => {
    const { value, name } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const handleClickButton = async () => {
    const response = await signInWithGooglePopup(); // after signin with google we get back a response obj
    await createUserDocumentFromAuth(response.user); // create a doc with response.user=userAuth
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password!!!");
          break;
        case "auth/user-not-found":
          alert("User not found, Email incorrect!!!");
          break;
        default:
          console.log(error);
          break;
      }
    }
    setformFields(defaultFormFields);
  };

  return (
    <div className="signin_container">
      <h2>Already have an account</h2>
      <span>Sign in with your Email and Password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="btn_group">
          <Button children="sign in" type="submit" />
          <Button
            type="button"
            children="google sign in"
            buttonType="google"
            onClick={handleClickButton}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
