import React from "react";
import {Col, Row} from "antd";
import Slider from "react-slick";

import Basic from "./Basic";
import Classic from "./Classic";
import Standard from "./Standard";
import {basicTestimonialsData, testimonialsData} from "./testimonialsData";
import IntlMessages from "../../../../util/IntlMessages";
import CardBox from "../../../../app/components/CardBox";
import ContainerHeader from "../../../../app/components/ContainerHeader";
import "./index.css";

class Testimonials extends React.Component {

  render() {
    const options = {
      dots: true,
      infinite: true,
      speed: 500,
      marginLeft: 10,
      marginRight: 10,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const options1 = {
      dots: true,
      infinite: true,
      speed: 500,
      marginLeft: 10,
      marginRight: 10,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };

    const options2 = {
      dots: true,
      infinite: true,
      speed: 500,
      marginLeft: 10,
      marginRight: 10,
      slidesToShow: 2,
      slidesToScroll: 1, responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]

    };

    return (
      <div className="gx-main-content">
        <ContainerHeader match={this.props.match}
                         title={<IntlMessages id="extraElements.testimonials"/>}
                         description="In promotion and of advertising, a testimonial or show consists of a person's written or spoken statement extolling the virtue of a product. "
        />

        <Row>
          <Col span={24}>
            <CardBox styleName="gx-text-center" heading={<IntlMessages id="testimonials.basic"/>}>
              <Slider  {...options}>
                <Basic testimonial={basicTestimonialsData[0]}/>
                <Basic testimonial={basicTestimonialsData[1]}/>
                <Basic testimonial={basicTestimonialsData[2]}/>
                <Basic testimonial={basicTestimonialsData[3]}/>
                <Basic testimonial={basicTestimonialsData[4]}/>
                <Basic testimonial={basicTestimonialsData[5]}/>
                <Basic testimonial={basicTestimonialsData[6]}/>
              </Slider>
            </CardBox>
          </Col>
          <Col span={24}>
            <CardBox styleName="gx-text-center" heading={<IntlMessages id="testimonials.classic"/>}>
              <Slider  {...options1}>
                <Classic testimonial={testimonialsData[0]}/>
                <Classic testimonial={testimonialsData[1]}/>
                <Classic testimonial={testimonialsData[2]}/>
                <Classic testimonial={testimonialsData[3]}/>
                <Classic testimonial={testimonialsData[4]}/>
                <Classic testimonial={testimonialsData[5]}/>
                <Classic testimonial={testimonialsData[6]}/>
              </Slider>
            </CardBox>
          </Col>
          <Col span={24}>
            <CardBox styleName="gx-text-center" heading={<IntlMessages id="testimonials.standard"/>}>
              <Slider  {...options2}>
                <Standard testimonial={testimonialsData[0]}/>
                <Standard testimonial={testimonialsData[1]}/>
                <Standard testimonial={testimonialsData[2]}/>
                <Standard testimonial={testimonialsData[3]}/>
                <Standard testimonial={testimonialsData[4]}/>
                <Standard testimonial={testimonialsData[5]}/>
                <Standard testimonial={testimonialsData[6]}/>
              </Slider>
            </CardBox>
          </Col>
        </Row>
      </div>
    )
  };
}

export default Testimonials;
