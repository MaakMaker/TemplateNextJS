import Head from 'next/head';
import Progress from '../../../routes/components/feedback/Progress';
import React from 'react';

const ProgressPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Progress</title>
      </Head>
      <Progress/>
    </React.Fragment>
  );
}

export default ProgressPage;
