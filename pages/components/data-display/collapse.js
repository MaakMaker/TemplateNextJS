import Head from 'next/head';
import Collapse from '../../../routes/components/dataDisplay/Collapse';
import React from 'react';

const CollapsePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Collapse</title>
      </Head>
      <Collapse/>
    </React.Fragment>
  );
}

export default CollapsePage;
