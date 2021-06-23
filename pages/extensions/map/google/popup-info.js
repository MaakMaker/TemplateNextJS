import Head from 'next/head';
import PopupInfo from '../../../../routes/extensions/map/googlemap/PopupInfo';
import React from 'react';

const PopupInfoPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Map - PopupInfo</title>
      </Head>
      <PopupInfo/>
    </React.Fragment>
  );
}

export default PopupInfoPage;
