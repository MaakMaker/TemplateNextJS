import Head from 'next/head';
import Menu from '../../../routes/components/navigation/Menu';
import React from 'react';

const MenuPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Menu</title>
      </Head>
      <Menu/>
    </React.Fragment>
  );
}

export default MenuPage;
