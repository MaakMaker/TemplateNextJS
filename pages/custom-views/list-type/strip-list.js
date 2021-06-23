import Head from 'next/head';
import Strip from '../../../routes/customViews/listType/Strip';
import React from 'react';

const StripPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Strip List</title>
      </Head>
      <Strip/>
    </React.Fragment>
  );
}

export default StripPage;
