import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { AuthPage } from "./auth-page.style";

const AuthpPage = () => {
  return (
    <AuthPage>
      <SignInForm />
      <SignUpForm />
    </AuthPage>
  );
};

export default AuthpPage;
