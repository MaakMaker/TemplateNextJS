import Head from 'next/head';
import Shuffles from '../../routes/extraComponents/Shuffles';
import React from 'react';

const ShufflesPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Shuffles</title>
      </Head>
      <Shuffles/>
    </React.Fragment>
  );
}

export default ShufflesPage;
