import Head from 'next/head';
import Choropleth from '../../../../routes/extensions/map/ammap/Choropleth';
import React from 'react';

const ChoroplethPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Choropleth</title>
      </Head>
      <Choropleth/>
    </React.Fragment>
  );
}

export default ChoroplethPage;
