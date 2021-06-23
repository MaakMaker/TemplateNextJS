import Head from 'next/head';
import Composed from '../../../../routes/extensions/charts/recharts/Composed';
import React from 'react';

const ComposedPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Composed</title>
      </Head>
      <Composed/>
    </React.Fragment>
  );
}

export default ComposedPage;
