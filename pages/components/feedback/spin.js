import Head from 'next/head';
import Spin from '../../../routes/components/feedback/Spin';
import React from 'react';

const SpinPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Spin</title>
      </Head>
      <Spin/>
    </React.Fragment>
  );
}

export default SpinPage;
