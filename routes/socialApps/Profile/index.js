import React, {Component} from "react";
import {Col, Row} from "antd";
import About from "../../../app/components/profile/About";
import Biography from "../../../app/components/profile/Biography";
import Events from "../../../app/components/profile/Events";
import Contact from "../../../app/components/profile/Contact";

import {friendList} from './data'
import {photoList} from "../Wall/data";
import Friends from "../../../app/components/profile/Friends";
import Photos from "../../../app/components/profile/Photos";

import ProfileHeader from "../../../app/components/profile/ProfileHeader";
import "../social-apps.css";


class Profile extends Component {

  render() {
    return (
      <>
        <ProfileHeader/>
        <div className="gx-profile-content">
          <Row>
            <Col xl={16} lg={14} md={14} sm={24} xs={24}>
              <About/>
              <Biography/>
              <Events/>
            </Col>

            <Col xl={8} lg={10} md={10} sm={24} xs={24}>
              <Contact/>
              <Row>
                <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                  <Friends friendList={friendList}/>
                </Col>
                <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                  <Photos photoList={photoList}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Profile;


