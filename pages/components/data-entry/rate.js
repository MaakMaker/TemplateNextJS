import Head from 'next/head';
import Rate from '../../../routes/components/dataEntry/Rate';
import React from 'react';

const RatePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Rate</title>
      </Head>
      <Rate/>
    </React.Fragment>
  );
}

export default RatePage;
