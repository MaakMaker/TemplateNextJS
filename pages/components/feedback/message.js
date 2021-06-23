import Head from 'next/head';
import Message from '../../../routes/components/feedback/Message';
import React from 'react';

const MessagePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Message</title>
      </Head>
      <Message/>
    </React.Fragment>
  );
}

export default MessagePage;
