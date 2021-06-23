import Head from 'next/head';
import Pagination from '../../../routes/components/navigation/Pagination';
import React from 'react';

const PaginationPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Pagination</title>
      </Head>
      <Pagination/>
    </React.Fragment>
  );
}

export default PaginationPage;
