import Head from 'next/head';
import LeftAligned from '../../../routes/extraComponents/timeLine/LeftAligned';
import React from 'react';

const LeftAlignedPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Left Aligned Timeline</title>
      </Head>
      <LeftAligned/>
    </React.Fragment>
  );
}

export default LeftAlignedPage;
