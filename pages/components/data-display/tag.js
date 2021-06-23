import Head from 'next/head';
import Tag from '../../../routes/components/dataDisplay/Tag';
import React from 'react';

const TagPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Tag</title>
      </Head>
      <Tag/>
    </React.Fragment>
  );
}

export default TagPage;
