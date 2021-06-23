import Head from 'next/head';
import Styled from '../../../../routes/extensions/map/googlemap/Styled';
import React from 'react';

const StyledPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - Styled</title>
      </Head>
      <Styled/>
    </React.Fragment>
  );
}

export default StyledPage;
