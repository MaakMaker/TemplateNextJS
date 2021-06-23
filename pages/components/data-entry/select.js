import Head from 'next/head';
import Select from '../../../routes/components/dataEntry/Select';
import React from 'react';

const SelectPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Select</title>
      </Head>
      <Select/>
    </React.Fragment>
  );
}

export default SelectPage;
