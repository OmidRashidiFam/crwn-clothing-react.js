import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import "./sign-up-form.scss";

// default value for state
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  // initial state
  const [formFields, setformFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //handler function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match!!!");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(response.user, {
        displayName: displayName,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create User, Email already in use!!!");
      }
      if (error.code === "auth/weak-password") {
        alert("Password must be at least 8 character, Week Password!!!");
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
        <Button children="sign in" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
