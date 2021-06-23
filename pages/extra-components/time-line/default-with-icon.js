import Head from 'next/head';
import DefaultWithIcon from '../../../routes/extraComponents/timeLine/DefaultWithIcon';
import React from 'react';

const DefaultWithIconPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Default With Icon Timeline</title>
      </Head>
      <DefaultWithIcon/>
    </React.Fragment>
  );
}

export default DefaultWithIconPage;
