import Head from 'next/head';
import Timeline from '../../../routes/components/dataDisplay/Timeline';
import React from 'react';

const TimelinePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Timeline</title>
      </Head>
      <Timeline/>
    </React.Fragment>
  );
}

export default TimelinePage;
