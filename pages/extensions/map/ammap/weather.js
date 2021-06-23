import Head from 'next/head';
import Weather from '../../../../routes/extensions/map/ammap/Weather';
import React from 'react';

const WeatherPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Weather</title>
      </Head>
      <Weather/>
    </React.Fragment>
  );
}

export default WeatherPage;
