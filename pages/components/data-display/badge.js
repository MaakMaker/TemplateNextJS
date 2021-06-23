import React from 'react';
import Head from 'next/head';
import Badge from '../../../routes/components/dataDisplay/Badge'

const BadgePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Badge</title>
      </Head>
      <Badge/>
    </React.Fragment>
  );
}

export default BadgePage;
