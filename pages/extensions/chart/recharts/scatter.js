import Head from 'next/head';
import Scatter from '../../../../routes/extensions/charts/recharts/Scatter';
import React from 'react';

const ScatterPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Scatter</title>
      </Head>
      <Scatter/>
    </React.Fragment>
  );
}

export default ScatterPage;
