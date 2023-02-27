import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

import "./auth-page.scss";

const AuthpPage = () => {
  return (
    <div className="authPage">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default AuthpPage;
