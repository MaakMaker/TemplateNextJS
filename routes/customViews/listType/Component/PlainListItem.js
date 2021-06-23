import React from "react";


function PlainListItem({styleName, data}) {
  const {image, name, work, like, comments, description} = data;
  return (
    <div className="gx-user-list">
      <img alt="avatar" src={image} className="gx-avatar-img gx-avatar-img-lg gx-border-0"/>
      <div className="gx-description">
        <h3>{name}</h3>
        <h5>in <span className="gx-link">{work}</span></h5>
        <p className="gx-mb-1">{description}</p>
        <ul className="gx-list-inline gx-btn-list">
          <li>
            <span className="gx-link gx-meta-like">
              <i className="icon icon-like-o gx-text-red"/>
              {like}
            </span>
          </li>
          <li>
            <span className="gx-link gx-meta-comment">
              <i className="icon icon-chat-new"/>
              {comments}
            </span>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default PlainListItem;
