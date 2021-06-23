import Head from 'next/head';
import Error404 from '../../../routes/customViews/extraPages/404';
import React from 'react';

const Error404Page = () => {
  return (
    <React.Fragment>
      <Head>
        <title>404 Error</title>
      </Head>
      <Error404/>
    </React.Fragment>
  );
}

export default Error404Page;
