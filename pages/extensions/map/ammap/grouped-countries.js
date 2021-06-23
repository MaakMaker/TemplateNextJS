import Head from 'next/head';
import GroupedCountries from '../../../../routes/extensions/map/ammap/GroupedCountries';
import React from 'react';

const GroupedCountriesPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Ammap Grouped Countries</title>
      </Head>
      <GroupedCountries/>
    </React.Fragment>
  );
}

export default GroupedCountriesPage;
