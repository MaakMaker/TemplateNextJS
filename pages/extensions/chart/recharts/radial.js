import Head from 'next/head';
import Radial from '../../../../routes/extensions/charts/recharts/Radial';
import React from 'react';

const RadialPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Radial</title>
      </Head>
      <Radial/>
    </React.Fragment>
  );
}

export default RadialPage;
