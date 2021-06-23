import Head from 'next/head';
import Pie from '../../../../routes/extensions/charts/amchart/Pie';
import React from 'react';

const PiePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Pie</title>
      </Head>
      <Pie/>
    </React.Fragment>
  );
}

export default PiePage;
