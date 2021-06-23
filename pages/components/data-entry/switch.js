import Head from 'next/head';
import Switches from '../../../routes/components/dataEntry/Switches';
import React from 'react';

const SwitchesPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Switches</title>
      </Head>
      <Switches/>
    </React.Fragment>
  );
}

export default SwitchesPage;
