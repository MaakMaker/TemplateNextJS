import Head from 'next/head';
import Breadcrumb from '../../../routes/components/navigation/Breadcrumb';
import React from 'react';

const BreadcrumbPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Breadcrumb</title>
      </Head>
      <Breadcrumb/>
    </React.Fragment>
  );
}

export default BreadcrumbPage;
