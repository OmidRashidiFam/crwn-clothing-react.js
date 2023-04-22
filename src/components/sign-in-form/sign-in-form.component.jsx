// import  useState
import { useState } from "react";

// import components
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import firebase utility functions for signin
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

// import styling components
import { SigninContainer, BtnGroup } from "./sign-in-form.style";

// set default empty values for form fields
const defaultFormFields = {
  email: "",
  password: "",
};

// main functional component
const SignInForm = () => {
  // initialize state with default form fields
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // handle change event on input fields
  const handleChange = (event) => {
    const { value, name } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  // handle click event when user clicks on signin with google button
  const handleClickButton = async () => {
    // call signInWithGooglePopup() to get response object
    const { user } = await signInWithGooglePopup();
    // create document in firebase with userAuth object
    await createUserDocumentFromAuth(user);
  };

  // handle submit event when user clicks on signin with email and password
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // call signInAuthUserWithEmailAndPassword() to authenticate user
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          // log error message if wrong password is entered
          console.log("Error: Wrong Password!!!");
          break;
        case "auth/user-not-found":
          // log error message if user is not found
          console.log("Error: User not found, Email incorrect!!!");
          break;
        case "auth/network-request-failed":
          // log error message if network request fails
          console.log(
            "Error: Request faild, Please check your Enternet connection!!!"
          );
          break;
        default:
          // log general error
          console.log(error);
          break;
      }
    }

    // reset form fields to empty values
    setformFields(defaultFormFields);
  };

  return (
    <SigninContainer>
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
        <BtnGroup>
          <Button children="sign in" type="submit" />
          <Button
            type="button"
            children="sign in with google"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleClickButton}
          />
        </BtnGroup>
      </form>
    </SigninContainer>
  );
};

export default SignInForm;
