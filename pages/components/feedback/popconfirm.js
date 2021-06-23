import Head from 'next/head';
import PopConfirm from '../../../routes/components/feedback/PopConfirm';
import React from 'react';

const PopConfirmPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>PopConfirm</title>
      </Head>
      <PopConfirm/>
    </React.Fragment>
  );
}

export default PopConfirmPage;
