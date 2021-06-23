import Head from 'next/head';
import ZoomingCountries from '../../../../routes/extensions/map/ammap/ZoomingCountries';
import React from 'react';

const ZoomingCountriesPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Zooming Countries</title>
      </Head>
      <ZoomingCountries/>
    </React.Fragment>
  );
}

export default ZoomingCountriesPage;
