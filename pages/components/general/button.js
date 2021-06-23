import Head from 'next/head';
import Button from '../../../routes/components/general/Button';
import React from 'react';

const ButtonPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Button</title>
      </Head>
      <Button/>
    </React.Fragment>
  );
}

export default ButtonPage;
