import Head from 'next/head';
import InputNumber from '../../../routes/components/dataEntry/InputNumber';
import React from 'react';

const InputNumberPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>InputNumber</title>
      </Head>
      <InputNumber/>
    </React.Fragment>
  );
}

export default InputNumberPage;
