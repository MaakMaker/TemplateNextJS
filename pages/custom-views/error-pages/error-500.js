import Head from 'next/head';
import Error500 from '../../../routes/customViews/extraPages/500';
import React from 'react';

const Error500Page = () => {
  return (
    <React.Fragment>
      <Head>
        <title>500 Error</title>
      </Head>
      <Error500/>
    </React.Fragment>
  );
}

export default Error500Page;
