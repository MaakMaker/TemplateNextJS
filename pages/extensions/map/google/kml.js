import Head from 'next/head';
import KML from '../../../../routes/extensions/map/googlemap/KML';
import React from 'react';

const KMLPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - KML</title>
      </Head>
      <KML/>
    </React.Fragment>
  );
}

export default KMLPage;
