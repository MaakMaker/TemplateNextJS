import React from 'react';
import asyncComponent from "../util/asyncComponent";

const SignUp = asyncComponent(() => import('../routes/customViews/userAuth/SignUp'));

const SignUpPage = () => {
  return <SignUp/>;
}

export default SignUpPage;
