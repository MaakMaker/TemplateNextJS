import Head from 'next/head';
import FlightRoutes from '../../../../routes/extensions/map/ammap/FlightRoutes';
import React from 'react';

const FlightRoutesPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Flight Routes</title>
      </Head>
      <FlightRoutes/>
    </React.Fragment>
  );
}

export default FlightRoutesPage;
