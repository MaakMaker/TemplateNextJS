import Head from 'next/head';
import SignIn from '../../../routes/customViews/userAuth/SignIn';
import React from 'react';

const SignInPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SignIn</title>
      </Head>
      <SignIn/>
    </React.Fragment>
  );
}

export default SignInPage;
