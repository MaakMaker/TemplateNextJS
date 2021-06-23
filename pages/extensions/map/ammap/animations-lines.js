import Head from 'next/head';
import AnimationsLines from '../../../../routes/extensions/map/ammap/AnimationsLines';
import React from 'react';

const AnimationsLinesPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Animations Lines</title>
      </Head>
      <AnimationsLines/>
    </React.Fragment>
  );
}

export default AnimationsLinesPage;
