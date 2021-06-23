import Head from 'next/head';
import Calendar from '../../../routes/components/dataDisplay/Calendar';
import React from 'react';

const CalendarPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Calendar</title>
      </Head>
      <Calendar/>
    </React.Fragment>
  );
}

export default CalendarPage;
