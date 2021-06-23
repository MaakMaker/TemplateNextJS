import Head from 'next/head';
import Radio from '../../../routes/components/dataEntry/Radio';
import React from 'react';

const RadioPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Radio</title>
      </Head>
      <Radio/>
    </React.Fragment>
  );
}

export default RadioPage;
