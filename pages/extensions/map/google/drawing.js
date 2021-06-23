import Head from 'next/head';
import Drawing from '../../../../routes/extensions/map/googlemap/Drawing';
import React from 'react';

const DrawingPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - Drawing</title>
      </Head>
      <Drawing/>
    </React.Fragment>
  );
}

export default DrawingPage;
