import Head from 'next/head';
import Mention from '../../../routes/components/dataEntry/Mention';
import React from 'react';

const MentionPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Mention</title>
      </Head>
      <Mention/>
    </React.Fragment>
  );
}

export default MentionPage;
