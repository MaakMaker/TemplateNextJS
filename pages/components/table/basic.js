import Head from 'next/head';
import Basic from '../../../routes/components/table/Basic';
import React from 'react';

const BasicPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Basic</title>
      </Head>
      <Basic/>
    </React.Fragment>
  );
}

export default BasicPage;
