import Head from 'next/head';
import Checkbox from '../../../routes/components/dataEntry/Checkbox';
import React from 'react';

const CheckboxPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Checkbox</title>
      </Head>
      <Checkbox/>
    </React.Fragment>
  );
}

export default CheckboxPage;
