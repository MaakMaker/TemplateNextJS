import Head from 'next/head';
import Simple from '../../../../routes/extensions/map/googlemap/Simple';
import React from 'react';

const SimplePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - Simple</title>
      </Head>
      <Simple/>
    </React.Fragment>
  );
}

export default SimplePage;
