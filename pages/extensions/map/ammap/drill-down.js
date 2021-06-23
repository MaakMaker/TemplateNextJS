import Head from 'next/head';
import DrillDown from '../../../../routes/extensions/map/ammap/DrillDown';
import React from 'react';

const DrillDownPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Drill Down</title>
      </Head>
      <DrillDown/>
    </React.Fragment>
  );
}

export default DrillDownPage;
