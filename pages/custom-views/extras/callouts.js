import Head from 'next/head';
import Callouts from '../../../routes/customViews/extras/Callouts';
import React from 'react';

const CalloutsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Callouts</title>
      </Head>
      <Callouts/>
    </React.Fragment>
  );
}

export default CalloutsPage;
