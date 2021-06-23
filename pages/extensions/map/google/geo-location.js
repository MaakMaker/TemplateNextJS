import Head from 'next/head';
import GeoLocation from '../../../../routes/extensions/map/googlemap/GeoLocation';
import React from 'react';

const GeoLocationPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - GeoLocation</title>
      </Head>
      <GeoLocation/>
    </React.Fragment>
  );
}

export default GeoLocationPage;
