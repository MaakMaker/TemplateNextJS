import React from 'react';
import Head from 'next/head';
import Avatar from '../../../routes/components/dataDisplay/Avatar';

const AvatarPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Avatar</title>
      </Head>
      <Avatar/>
    </React.Fragment>
  );
}

export default AvatarPage;
