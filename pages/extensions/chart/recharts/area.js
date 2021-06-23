import Head from 'next/head';
import Area from '../../../../routes/extensions/charts/recharts/Area';
import React from 'react';

const AreaPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Area</title>
      </Head>
      <Area/>
    </React.Fragment>
  );
}

export default AreaPage;
