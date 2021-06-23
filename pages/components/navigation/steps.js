import Head from 'next/head';
import Steps from '../../../routes/components/navigation/Steps';
import React from 'react';

const StepsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Steps</title>
      </Head>
      <Steps/>
    </React.Fragment>
  );
}

export default StepsPage;
