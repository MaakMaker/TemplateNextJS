import Head from 'next/head';
import Slider from '../../../routes/components/dataEntry/Slider';
import React from 'react';

const SliderPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Slider</title>
      </Head>
      <Slider/>
    </React.Fragment>
  );
}

export default SliderPage;
