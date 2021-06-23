import Head from 'next/head';
import Dropdown from '../../../routes/components/navigation/Dropdown';
import React from 'react';

const DropdownPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Dropdown</title>
      </Head>
      <Dropdown/>
    </React.Fragment>
  );
}

export default DropdownPage;
