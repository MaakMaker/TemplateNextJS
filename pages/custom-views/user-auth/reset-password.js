import Head from 'next/head';
import ResetPassword from '../../../routes/customViews/userAuth/ResetPassword';
import React from 'react';

const ResetPasswordPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ResetPassword</title>
      </Head>
      <ResetPassword/>
    </React.Fragment>
  );
}

export default ResetPasswordPage;
