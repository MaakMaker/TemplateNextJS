import Head from 'next/head';
import Card from '../../../routes/customViews/listType/Card';
import React from 'react';

const CardPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Card List</title>
      </Head>
      <Card/>
    </React.Fragment>
  );
}

export default CardPage;
