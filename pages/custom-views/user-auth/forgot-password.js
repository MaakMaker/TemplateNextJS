import Head from 'next/head';
import ForgotPassword from '../../../routes/customViews/userAuth/ForgotPassword';
import React from 'react';

const ForgotPasswordPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ForgotPassword</title>
      </Head>
      <ForgotPassword/>
    </React.Fragment>
  );
}

export default ForgotPasswordPage;
