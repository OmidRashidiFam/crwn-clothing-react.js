import { useState } from "react";

import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import "./sign-in-form.scss";

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

  // handeler function
  const handleClickButton = async () => {
    const { user } = await signInWithGooglePopup(); // after signin with google we get back a response obj
    await createUserDocumentFromAuth(user); // create a doc with response.user=userAuth

    console.log("Signed In with google was successfully!!!");
  };

  // handeler function
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      console.log("Signed In with email and password was successfully!!!");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          console.log("Error: Wrong Password!!!");
          break;
        case "auth/user-not-found":
          console.log("Error: User not found, Email incorrect!!!");
          break;
        case "auth/network-request-failed":
          console.log(
            "Error: Request faild, Please check your Enternet connection!!!"
          );
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
            children="sign in with google"
            buttonType="google"
            onClick={handleClickButton}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
