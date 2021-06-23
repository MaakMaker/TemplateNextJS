import Head from 'next/head';
import CK from '../../../routes/extraComponents/editors/CK';
import React from 'react';

const CKPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>CK Editor</title>
      </Head>
      <CK/>
    </React.Fragment>
  );
}

export default CKPage;
