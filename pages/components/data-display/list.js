import Head from 'next/head';
import List from '../../../routes/components/dataDisplay/List';
import React from 'react';

const ListPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>List</title>
      </Head>
      <List/>
    </React.Fragment>
  );
}

export default ListPage;
