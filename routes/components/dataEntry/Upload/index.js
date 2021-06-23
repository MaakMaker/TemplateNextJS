import React, {Component} from "react";

import {Col, Row} from "antd";

import UploadClick from "./UploadClick";
import Avatar from "./Avatar";
import UploadDefault from "./UploadDefault";
import UploadPicture from "./UploadPicture";
import CompleteControl from "./CompleteControl";
import DragDrop from "./DragDrop";
import UploadListStyle from "./UploadListStyle";


class Upload extends Component {

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <UploadClick/>
          <Avatar/>
          <UploadDefault/>
          <UploadPicture/>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <CompleteControl/>
          <DragDrop/>
          <UploadListStyle/>
        </Col>
      </Row>
    );
  }
}


export default Upload;
