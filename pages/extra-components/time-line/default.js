import Head from 'next/head';
import Default from '../../../routes/extraComponents/timeLine/Default';
import React from 'react';

const DefaultTimelinePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Default Timeline</title>
      </Head>
      <Default/>
    </React.Fragment>
  );
}

export default DefaultTimelinePage;
