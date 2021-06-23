import React from "react";
import {Avatar} from "antd";

const Standard = ({testimonial}) => {
  const {content, avatar, name, title} = testimonial;
  return (
    <div className="gx-testimonial-bg gx-standard gx-slide-item gx-text-left">
      <div className="gx-media">
        <Avatar className="gx-mr-3 gx-mb-3" src={avatar}/>
        <div className="gx-media-body">
          <div className="gx-testimonial-des">
            <p className="gx-description">{content}</p>
            <h5 className="gx-title">{name}</h5>
            <small className="gx-post-designation gx-text-white">{title}</small>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Standard;

