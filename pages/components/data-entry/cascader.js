import Head from 'next/head';
import Cascader from '../../../routes/components/dataEntry/Cascader';
import React from 'react';

const CascaderPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Cascader</title>
      </Head>
      <Cascader/>
    </React.Fragment>
  );
}

export default CascaderPage;
