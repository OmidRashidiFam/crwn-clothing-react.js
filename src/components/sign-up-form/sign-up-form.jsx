import { useState, useContext } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { AuthContext } from "../../contexts/auth-context";

import "./sign-up-form.scss";

// default value for state
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // initial state
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // useing Auth context
  const { setCurentUser } = useContext(AuthContext);

  //handler function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  //handler function
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match!!!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {
        displayName: displayName,
      });

      setCurentUser(user);
      console.log("Signed Up Successfully!!!");
      alert("Signed Up Successfully!!!");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("Cannot create User, Email already in use!!!");
        alert("Cannot create User, Email already in use!!!");
      }
      if (error.code === "auth/weak-password") {
        console.log("Password must be at least 6 character, Week Password!!!");
        alert("Password must be at least 6 character, Week Password!!!");
      }
      console.log(error);
    }
    setformFields(defaultFormFields);
  };

  return (
    <div className="signup_container">
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
    </div>
  );
};

export default SignUpForm;
