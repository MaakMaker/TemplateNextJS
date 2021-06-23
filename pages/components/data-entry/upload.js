import Head from 'next/head';
import Upload from '../../../routes/components/dataEntry/Upload';
import React from 'react';

const UploadPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Upload</title>
      </Head>
      <Upload/>
    </React.Fragment>
  );
}

export default UploadPage;
