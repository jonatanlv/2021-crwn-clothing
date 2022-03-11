import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

// TODO Convertir a styled components
import "./signin-and-signup.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-pane">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
