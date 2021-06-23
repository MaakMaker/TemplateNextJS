import Head from 'next/head';
import SignUp from '../../../routes/customViews/userAuth/SignUp';
import React from 'react';

const SignUpPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SignUp</title>
      </Head>
      <SignUp/>
    </React.Fragment>
  );
}

export default SignUpPage;
