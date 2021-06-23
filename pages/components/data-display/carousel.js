import Head from 'next/head';
import Carousel from '../../../routes/components/dataDisplay/Carousel';
import React from 'react';

const CarouselPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Carousel</title>
      </Head>
      <Carousel/>
    </React.Fragment>
  );
}

export default CarouselPage;
