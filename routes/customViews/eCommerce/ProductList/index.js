import React from "react";
import {Col, Row} from "antd";
import productData from "../../../../public/data/productData";
import ProductItem from "../../../../app/components/eCommerce/ProductItem";
import "../index.css";

function ProductsList() {
  return (
    <div className="gx-main-content">
      <Row>
        {productData.map((product, index) => (<Col key={index} span={24}>
            <ProductItem key={index} product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductsList;
