// import React hooks
import { useState } from "react";

// import firebase utilities for authentication and creating user document
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

// import components
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// import styles
import { SignupContainer } from "./sign-up-form.style";

// default value for state
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// SignUpForm component
const SignUpForm = () => {
  // initial state
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // handle change event for input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  // handle submit event
  const handleSubmit = async (event) => {
    event.preventDefault();

    // check if password and confirm password are equal
    if (password !== confirmPassword) {
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // create user document from authentication user
      await createUserDocumentFromAuth(user, {
        displayName: displayName,
      });
    } catch (error) {
      // log error messages
      if (error.code === "auth/email-already-in-use") {
        console.log("Error: Cannot create User, Email already in use!!!");
      }
      if (error.code === "auth/weak-password") {
        console.log(
          "Error: Password must be at least 6 character, Week Password!!!"
        );
      }
      if (error.code === "auth/network-request-failed") {
        console.log(
          "Error: Request faild, Please check your Enternet connection!!!"
        );
      }

      console.log(error);
    }

    // reset the form field to default values
    setformFields(defaultFormFields);
  };

  return (
    <SignupContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your Email and Password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button children="sign up" type="submit" />
      </form>
    </SignupContainer>
  );
};

export default SignUpForm;
