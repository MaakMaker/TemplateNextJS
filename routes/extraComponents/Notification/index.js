import React from "react";
import {NotificationContainer, NotificationManager} from "react-notifications";
import {Button, Card, Col, Row} from "antd";

import ContainerHeader from "../../../app/components/ContainerHeader";
import IntlMessages from "../../../util/IntlMessages";

class Example extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info(<IntlMessages id="notification.infoMsg"/>);
          break;
        case 'success':
          NotificationManager.success(<IntlMessages id="notification.successMessage"/>, <IntlMessages
            id="notification.titleHere"/>);
          break;
        case 'warning':
          NotificationManager.warning(<IntlMessages id="notification.warningMessage"/>, <IntlMessages
            id="notification.closeAfter3000ms"/>, 3000);
          break;
        case 'error':
          NotificationManager.error(<IntlMessages id="notification.errorMessage"/>, <IntlMessages
            id="notification.clickMe"/>, 5000, () => {
            alert('callback');
          });
          break;
        default:
          NotificationManager.info(<IntlMessages id="notification.infoMsg"/>);
          break;

      }
    };
  };

  render() {
    return (
      <div className="gx-main-content">
        <ContainerHeader title={<IntlMessages id="extension.notification"/>} match={this.props.match}/>
        <Row>
          <Col span={24}>
            <Card className="gx-text-center">
              <Button className='btn btn-info' type="primary"
                      onClick={this.createNotification('info')}><IntlMessages id="notification.info"/>
              </Button>
              <Button className='gx-btn-success'
                      onClick={this.createNotification('success')}><IntlMessages
                id="notification.success"/>
              </Button>
              <Button className='gx-btn-warning'
                      onClick={this.createNotification('warning')}><IntlMessages
                id="notification.warning"/>
              </Button>
              <Button className='gx-btn-danger gx-mb-lg-3'
                      onClick={this.createNotification('error')}><IntlMessages id="notification.error"/>
              </Button>
            </Card>
          </Col>

        </Row>

        <NotificationContainer/>
      </div>
    );
  }
}
export default Example;

