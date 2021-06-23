import Head from 'next/head';
import Divider from '../../../routes/components/others/Divider';
import React from 'react';

const DividerPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Divider</title>
      </Head>
      <Divider/>
    </React.Fragment>
  );
}

export default DividerPage;
