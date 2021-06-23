import Head from 'next/head';
import Input from '../../../routes/components/dataEntry/Input';
import React from 'react';

const InputPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Input</title>
      </Head>
      <Input/>
    </React.Fragment>
  );
}

export default InputPage;
