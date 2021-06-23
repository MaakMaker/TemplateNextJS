import Head from 'next/head';
import TimePicker from '../../../routes/components/dataEntry/TimePicker';
import React from 'react';

const TimePickerPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>TimePicker</title>
      </Head>
      <TimePicker/>
    </React.Fragment>
  );
}

export default TimePickerPage;
