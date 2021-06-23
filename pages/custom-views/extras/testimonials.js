import Head from 'next/head';
import Testimonials from '../../../routes/customViews/extras/Testimonials';
import React from 'react';

const TestimonialsPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Testimonials</title>
      </Head>
      <Testimonials/>
    </React.Fragment>
  );
}

export default TestimonialsPage;
