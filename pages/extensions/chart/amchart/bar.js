import Head from 'next/head';
import Bar from '../../../../routes/extensions/charts/amchart/Bar';
import React from 'react';

const BarPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Bar</title>
      </Head>
      <Bar/>
    </React.Fragment>
  );
}

export default BarPage;
