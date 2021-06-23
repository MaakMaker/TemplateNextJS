import Head from 'next/head';
import Sample from '../../../routes/customViews/listType/Sample';
import React from 'react';

const SamplePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sample List</title>
      </Head>
      <Sample/>
    </React.Fragment>
  );
}

export default SamplePage;
