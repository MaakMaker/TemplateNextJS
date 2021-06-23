import Head from 'next/head';
import StreetView from '../../../../routes/extensions/map/googlemap/StreetView';
import React from 'react';

const StreetViewPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - StreetView</title>
      </Head>
      <StreetView/>
    </React.Fragment>
  );
}

export default StreetViewPage;
