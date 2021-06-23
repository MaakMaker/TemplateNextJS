import Head from 'next/head';
import SweetAlert from '../../routes/extraComponents/SweetAlert';
import React from 'react';

const SweetAlertPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SweetAlert</title>
      </Head>
      <SweetAlert/>
    </React.Fragment>
  );
}

export default SweetAlertPage;
