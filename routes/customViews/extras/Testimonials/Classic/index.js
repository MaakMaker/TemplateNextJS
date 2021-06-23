import React from "react";
import StarRatingComponent from "react-star-rating-component";
import {Avatar} from "antd";

const Classic = ({testimonial}) => {
  const {content, avatar, name, title} = testimonial;
  return (
    <div className="gx-classic-testimonial gx-slide-item">
      <Avatar src={avatar} alt="..."/>
      <h3 className="gx-title">{name}</h3>
      <small className="gx-post-designation">{title}</small>

      <div className="gx-star-rating">
        <StarRatingComponent name={name} starCount={5} value={4.5}/>
      </div>
      <p className="gx-description">{content}</p>
    </div>
  )
};

export default Classic;

