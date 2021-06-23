import Head from 'next/head';
import Tooltip from '../../../routes/components/dataDisplay/Tooltip';
import React from 'react';

const TooltipPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Tooltip</title>
      </Head>
      <Tooltip/>
    </React.Fragment>
  );
}

export default TooltipPage;
