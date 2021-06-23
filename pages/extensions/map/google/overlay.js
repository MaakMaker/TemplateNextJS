import Head from 'next/head';
import Overlay from '../../../../routes/extensions/map/googlemap/Overlay';
import React from 'react';

const OverlayPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - Overlay</title>
      </Head>
      <Overlay/>
    </React.Fragment>
  );
}

export default OverlayPage;
