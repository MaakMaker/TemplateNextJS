import Head from 'next/head';
import Tree from '../../../routes/components/dataDisplay/Tree';
import React from 'react';

const TreePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Tree</title>
      </Head>
      <Tree/>
    </React.Fragment>
  );
}

export default TreePage;
