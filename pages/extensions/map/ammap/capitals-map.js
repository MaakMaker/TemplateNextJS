import Head from 'next/head';
import CapitalsMap from '../../../../routes/extensions/map/ammap/CapitalsMap';
import React from 'react';

const CapitalsMapPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Capitals Map</title>
      </Head>
      <CapitalsMap/>
    </React.Fragment>
  );
}

export default CapitalsMapPage;
