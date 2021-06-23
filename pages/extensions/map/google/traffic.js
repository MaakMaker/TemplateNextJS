import Head from 'next/head';
import Traffic from '../../../../routes/extensions/map/googlemap/Traffic';
import React from 'react';

const TrafficPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - Traffic</title>
      </Head>
      <Traffic/>
    </React.Fragment>
  );
}

export default TrafficPage;
