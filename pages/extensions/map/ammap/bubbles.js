import Head from 'next/head';
import Bubbles from '../../../../routes/extensions/map/ammap/Bubbles';
import React from 'react';

const BubblesPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Bubbles</title>
      </Head>
      <Bubbles/>
    </React.Fragment>
  );
}

export default BubblesPage;
