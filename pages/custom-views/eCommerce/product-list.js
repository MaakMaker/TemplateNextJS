import Head from 'next/head';
import ProductList from '../../../routes/customViews/eCommerce/ProductList';
import React from 'react';

const ProductListPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Product List</title>
      </Head>
      <ProductList/>
    </React.Fragment>
  );
}

export default ProductListPage;
