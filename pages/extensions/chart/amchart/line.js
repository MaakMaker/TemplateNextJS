import Head from 'next/head';
import Line from '../../../../routes/extensions/charts/amchart/Line';
import React from 'react';

const LinePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Line</title>
      </Head>
      <Line/>
    </React.Fragment>
  );
}

export default LinePage;
