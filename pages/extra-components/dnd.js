import Head from 'next/head';
import DragNDrop from '../../routes/extraComponents/DragnDrop';
import React from 'react';

const DragNDropPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Drag n Drop</title>
      </Head>
      <DragNDrop/>
    </React.Fragment>
  );
}

export default DragNDropPage;
