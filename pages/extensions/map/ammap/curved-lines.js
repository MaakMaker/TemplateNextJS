import Head from 'next/head';
import CurvedLines from '../../../../routes/extensions/map/ammap/CurvedLines';
import React from 'react';

const CurvedLinesPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Curved Lines</title>
      </Head>
      <CurvedLines/>
    </React.Fragment>
  );
}

export default CurvedLinesPage;
