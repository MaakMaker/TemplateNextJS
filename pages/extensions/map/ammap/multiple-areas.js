import Head from 'next/head';
import MultipleAreas from '../../../../routes/extensions/map/ammap/MultipleAreas';
import React from 'react';

const MultipleAreasPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Multiple Areas</title>
      </Head>
      <MultipleAreas/>
    </React.Fragment>
  );
}

export default MultipleAreasPage;
