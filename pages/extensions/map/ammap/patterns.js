import Head from 'next/head';
import Patterns from '../../../../routes/extensions/map/ammap/Patterns';
import React from 'react';

const PatternsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Patterns</title>
      </Head>
      <Patterns/>
    </React.Fragment>
  );
}

export default PatternsPage;
