import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import {Button, Card, Col, Row} from "antd";

import ContainerHeader from "../../../app/components/ContainerHeader";
import IntlMessages from "../../../util/IntlMessages";

class SweetAlerts extends React.Component {
  onConfirm = () => {
    this.setState({
      basic: false,
      withDes: false,
      success: false,
      warning: false,
      custom: false,
      html: false,
      prompt: false,
      password: false,
      style: false,
    });
  };
  deleteFile = () => {
    this.setState({
      warning: false
    })
  };
  onCancelDelete = () => {
    this.setState({
      warning: false
    })
  };
  onCancel = () => {
    this.setState({
      custom: false,
      prompt: false
    })
  };

  constructor() {
    super();
    this.state = {
      basic: false,
      withDes: false,
      success: false,
      warning: false,
      custom: false,
      html: false,
      prompt: false,
      password: false,
      style: false,
    };
  }

  render() {
    const {basic, withDes, success, warning, custom, html, prompt, password, style} = this.state;
    return (
      <div className="gx-main-content">
        <ContainerHeader title={<IntlMessages id="extension.sweetAlerts"/>} match={this.props.match}/>

        <Row>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({basic: true})
              }}><IntlMessages id="sweetAlerts.basic"/></Button>
            </Card>
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({withDes: true})
              }}><IntlMessages id="sweetAlerts.description"/></Button>
            </Card>

          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({success: true})
              }}><IntlMessages id="sweetAlerts.success"/></Button>
            </Card>

          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({warning: true})
              }}><IntlMessages id="sweetAlerts.warning"/></Button>
            </Card>

          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({custom: true})
              }}><IntlMessages id="sweetAlerts.custom"/></Button>
            </Card>

          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({html: true})
              }}><IntlMessages id="sweetAlerts.htmlTag"/></Button>
            </Card>

          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({prompt: true})
              }}><IntlMessages id="sweetAlerts.prompt"/></Button>
            </Card>

          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({password: true})
              }}><IntlMessages id="sweetAlerts.passwordPrompt"/></Button>
            </Card>

          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <Card className="gx-text-center">
              <Button className="gx-mb-0" type="primary" onClick={() => {
                this.setState({style: true})
              }}><IntlMessages id="sweetAlerts.customStyle"/></Button>
            </Card>
          </Col>
        </Row>
        <SweetAlert show={basic}
                    customClass="gx-sweet-alert-top-space"
                    title={<IntlMessages id="sweetAlerts.hereIsaMessage"/>}
                    onConfirm={this.onConfirm}/>
        <SweetAlert show={withDes}
                    customClass="gx-sweet-alert-top-space"
                    title={<IntlMessages id="sweetAlerts.hereIsaMessage"/>}
                    onConfirm={this.onConfirm}>
          <IntlMessages id="sweetAlerts.itPretty"/>
        </SweetAlert>
        <SweetAlert show={success} success title={<IntlMessages id="sweetAlerts.goodJob"/>}
                    onConfirm={this.onConfirm}>
          <IntlMessages id="sweetAlerts.btnClicked"/>
        </SweetAlert>
        <SweetAlert show={warning}
                    warning
                    showCancel
                    confirmBtnText={<IntlMessages id="sweetAlerts.yesDeleteIt"/>}
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="default"
                    title={<IntlMessages id="sweetAlerts.areYouSure"/>}
                    onConfirm={this.deleteFile}
                    onCancel={this.onCancelDelete}
        >
          <IntlMessages id="sweetAlerts.youWillNotAble"/>
        </SweetAlert>
        <SweetAlert show={custom}
                    custom
                    showCancel
                    confirmBtnText={<IntlMessages id="button.yes"/>}
                    cancelBtnText={<IntlMessages id="button.no"/>}
                    confirmBtnBsStyle="primary"
                    cancelBtnBsStyle="default"
                    customIcon={"https://via.placeholder.com/500x330"}
                    title={<IntlMessages id="sweetAlerts.doYouLikeThumb"/>}
                    onConfirm={this.onConfirm}
                    onCancel={this.onCancel}
        >
          <IntlMessages id="sweetAlerts.youWillFind"/>
        </SweetAlert>
        <SweetAlert show={html}
                    customClass="gx-sweet-alert-top-space"
                    title={<span>HTML <small>Title</small>!</span>}
                    onConfirm={this.onConfirm}
        >
          <span>A custom <span style={{color: '#F8BB86'}}>html</span> message.</span>
        </SweetAlert>
        <SweetAlert show={prompt}
                    input
                    showCancel
                    cancelBtnBsStyle="default"
                    title={<IntlMessages id="sweetAlerts.anInput"/>}
                    inputPlaceHolder={<IntlMessages id="sweetAlerts.anInput"/>}
                    onConfirm={this.onConfirm}
                    onCancel={this.onCancel}
                    customClass="gx-sweet-alert-top-space"
        >
          <IntlMessages id="sweetAlerts.basic"/>{<IntlMessages id="sweetAlerts.writeSomething"/>}
        </SweetAlert>
        <SweetAlert show={password}
                    customClass="gx-sweet-alert-top-space"
                    input
                    required
                    inputType="password"
                    title={<IntlMessages id="sweetAlerts.youMustEnterPassword"/>}
                    validationMsg="You must enter your password!"
                    onConfirm={this.onConfirm}
        />
        <SweetAlert show={style}
                    title="Yay!"
                    customClass="gx-custom-sweet-alert gx-sweet-alert-top-space"
                    style={{backgroundColor: '#008000', color: '#ffffff'}}
                    onConfirm={this.onConfirm}
        >
          <IntlMessages id="sweetAlerts.itsBlue"/>
        </SweetAlert>
      </div>
    )
  }
}
export default SweetAlerts;

