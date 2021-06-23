import Head from 'next/head';
import Event from '../../../../routes/extensions/map/googlemap/Event';
import React from 'react';

const EventPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - Event</title>
      </Head>
      <Event/>
    </React.Fragment>
  );
}

export default EventPage;
