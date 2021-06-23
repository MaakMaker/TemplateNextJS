import Head from 'next/head';
import Tabs from '../../../routes/components/dataDisplay/Tabs';
import React from 'react';

const TabsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Tabs</title>
      </Head>
      <Tabs/>
    </React.Fragment>
  );
}

export default TabsPage;
