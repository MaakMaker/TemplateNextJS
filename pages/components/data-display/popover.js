import Head from 'next/head';
import Popover from '../../../routes/components/dataDisplay/Popover';
import React from 'react';

const PopoverPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Popover</title>
      </Head>
      <Popover/>
    </React.Fragment>
  );
}

export default PopoverPage;
