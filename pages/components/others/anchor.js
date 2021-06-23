import Head from 'next/head';
import Anchor from '../../../routes/components/others/Anchor';
import React from 'react';

const AnchorPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Anchor</title>
      </Head>
      <Anchor/>
    </React.Fragment>
  );
}

export default AnchorPage;
