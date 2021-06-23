import React from 'react';
import asyncComponent from '../util/asyncComponent'

const SignIn = asyncComponent(() => import('../routes/customViews/userAuth/SignIn'));

const SignInPage = () => {
  return <SignIn/>;
}

export default SignInPage;
