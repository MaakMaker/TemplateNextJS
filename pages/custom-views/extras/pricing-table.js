import Head from 'next/head';
import PricingTable from '../../../routes/customViews/extras/PricingTable';
import React from 'react';

const PricingTablePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Pricing Table</title>
      </Head>
      <PricingTable/>
    </React.Fragment>
  );
}

export default PricingTablePage;
