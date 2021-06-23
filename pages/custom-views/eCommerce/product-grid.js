import Head from 'next/head';
import ProductGrid from '../../../routes/customViews/eCommerce/ProductGrid';
import React from 'react';

const ProductGridPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Product Grid</title>
      </Head>
      <ProductGrid/>
    </React.Fragment>
  );
}

export default ProductGridPage;
