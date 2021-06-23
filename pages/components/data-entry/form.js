import Head from 'next/head';
import Form from '../../../routes/components/dataEntry/Form';
import React from 'react';

const FormPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Form</title>
      </Head>
      <Form/>
    </React.Fragment>
  );
}

export default FormPage;
