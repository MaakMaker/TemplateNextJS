import Head from 'next/head';
import Data from '../../../routes/components/table/Data';
import React from 'react';

const DataPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Data</title>
      </Head>
      <Data/>
    </React.Fragment>
  );
}

export default DataPage;
