import Head from 'next/head';
import AutoComplete from '../../../routes/components/dataEntry/AutoComplete';
import React from 'react';

const AutoCompletePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>AutoComplete</title>
      </Head>
      <AutoComplete/>
    </React.Fragment>
  );
}

export default AutoCompletePage;
