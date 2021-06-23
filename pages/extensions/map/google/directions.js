import Head from 'next/head';
import Directions from '../../../../routes/extensions/map/googlemap/Directions';
import React from 'react';

const DirectionsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - Directions</title>
      </Head>
      <Directions/>
    </React.Fragment>
  );
}

export default DirectionsPage;
