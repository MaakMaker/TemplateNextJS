import Head from 'next/head';
import TreeSelect from '../../../routes/components/dataEntry/TreeSelect';
import React from 'react';

const TreeSelectPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>TreeSelect</title>
      </Head>
      <TreeSelect/>
    </React.Fragment>
  );
}

export default TreeSelectPage;
