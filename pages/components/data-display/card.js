import Head from 'next/head';
import Cards from '../../../routes/components/dataDisplay/Cards';
import React from 'react';

const CardsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Cards</title>
      </Head>
      <Cards/>
    </React.Fragment>
  );
}

export default CardsPage;
