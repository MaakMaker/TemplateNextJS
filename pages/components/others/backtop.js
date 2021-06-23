import Head from 'next/head';
import BackTop from '../../../routes/components/others/BackTop';
import React from 'react';

const BackTopPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>BackTop</title>
      </Head>
      <BackTop/>
    </React.Fragment>
  );
}

export default BackTopPage;
