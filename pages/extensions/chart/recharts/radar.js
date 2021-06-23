import Head from 'next/head';
import Radar from '../../../../routes/extensions/charts/recharts/Radar';
import React from 'react';

const RadarPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Radar</title>
      </Head>
      <Radar/>
    </React.Fragment>
  );
}

export default RadarPage;
