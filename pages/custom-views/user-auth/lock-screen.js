import Head from 'next/head';
import LockScreen from '../../../routes/customViews/userAuth/LockScreen';
import React from 'react';

const LockScreenPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>LockScreen</title>
      </Head>
      <LockScreen/>
    </React.Fragment>
  );
}

export default LockScreenPage;
