import Head from 'next/head';
import Icon from '../../../routes/components/general/Icon';
import React from 'react';

const IconPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Icon</title>
      </Head>
      <Icon/>
    </React.Fragment>
  );
}

export default IconPage;
