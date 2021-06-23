import React, {Component} from "react";
import FlipMove from 'react-flip-move';
import shuffle from 'lodash/shuffle';
import ProductItem from "../../../app/components/eCommerce/ProductItem";
import productData from "../../../public/data/productData";
import {Button, Col, Row} from "antd";

import "../../customViews/eCommerce/index.css";

const customEnterAnimation = {
  from: {transform: 'scale(0.5, 1)'},
  to: {transform: 'scale(1, 1)'}
};

class Shuffles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productData
    };

    this.sortRotate = this.sortRotate.bind(this);
    this.sortShuffle = this.sortShuffle.bind(this);
  }

  sortShuffle() {
    this.setState({
      sortingMethod: 'shuffle',
      products: shuffle(this.state.products)
    });
  }

  sortRotate() {
    const products = this.state.products.slice();
    products.unshift(products.pop());
    this.setState({
      products
    });
  }


  render() {
    return (
      <>
        <div>
          <Button onClick={this.sortShuffle}>Shuffle</Button>
          <Button onClick={this.sortRotate}>Rotate </Button>
        </div>
        <FlipMove
          staggerDurationBy="30"
          duration={500}
          enterAnimation={customEnterAnimation}>
          <Row>
            {this.state.products.map((product, index) => (
              <Col key={index} xl={6} md={8} sm={12} xs={24}>
                <ProductItem key={index} grid product={product}/>
              </Col>
            ))}
          </Row>
        </FlipMove>
      </>
    );
  }
}


export default Shuffles;


