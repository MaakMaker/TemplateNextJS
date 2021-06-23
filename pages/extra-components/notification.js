import Head from 'next/head';
import Notification from '../../routes/extraComponents/Notification';
import React from 'react';

const NotificationPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Notification</title>
      </Head>
      <Notification/>
    </React.Fragment>
  );
}

export default NotificationPage;
