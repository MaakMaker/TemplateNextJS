import Head from 'next/head';
import Alert from '../../../routes/components/feedback/Alert';
import React from 'react';

const AlertPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Alert</title>
      </Head>
      <Alert/>
    </React.Fragment>
  );
}

export default AlertPage;
