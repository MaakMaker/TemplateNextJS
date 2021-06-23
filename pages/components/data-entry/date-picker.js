import Head from 'next/head';
import DatePicker from '../../../routes/components/dataEntry/DatePicker';
import React from 'react';

const DatePickerPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>DatePicker</title>
      </Head>
      <DatePicker/>
    </React.Fragment>
  );
}

export default DatePickerPage;
