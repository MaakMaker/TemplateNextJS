import Head from 'next/head';
import Treemap from '../../../../routes/extensions/charts/recharts/Treemap';
import React from 'react';

const TreemapPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Treemap</title>
      </Head>
      <Treemap/>
    </React.Fragment>
  );
}

export default TreemapPage;
