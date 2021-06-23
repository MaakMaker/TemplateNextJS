import Head from 'next/head';
import Transfer from '../../../routes/components/dataEntry/Transfer';
import React from 'react';

const TransferPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Transfer</title>
      </Head>
      <Transfer/>
    </React.Fragment>
  );
}

export default TransferPage;
