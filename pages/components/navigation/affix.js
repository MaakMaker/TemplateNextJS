import Head from 'next/head';
import Affix from '../../../routes/components/navigation/Affix';
import React from 'react';

const AffixPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Affix</title>
      </Head>
      <Affix/>
    </React.Fragment>
  );
}

export default AffixPage;
