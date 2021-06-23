import Head from 'next/head';
import MapMarkers from '../../../../routes/extensions/map/ammap/MapMarkers';
import React from 'react';

const MapMarkersPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Map Markers</title>
      </Head>
      <MapMarkers/>
    </React.Fragment>
  );
}

export default MapMarkersPage;
