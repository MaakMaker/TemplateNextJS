import Head from 'next/head';
import Modal from '../../../routes/components/feedback/Modal';
import React from 'react';

const ModalPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Modal</title>
      </Head>
      <Modal/>
    </React.Fragment>
  );
}

export default ModalPage;
