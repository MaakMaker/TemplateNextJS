import Head from 'next/head';
import Clustering from '../../../../routes/extensions/map/googlemap/Clustering';
import React from 'react';

const ClusteringPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - Clustering</title>
      </Head>
      <Clustering/>
    </React.Fragment>
  );
}

export default ClusteringPage;
