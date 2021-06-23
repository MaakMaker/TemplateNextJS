import React from "react";
import {Card, Col, Row} from "antd";

const tabList = [{
  key: 'tab1',
  tab: 'tab1',
}, {
  key: 'tab2',
  tab: 'tab2',
}];

const contentList = {
  tab1: <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>,
  tab2: <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
    at its layout.</p>,
};

const tabListNoTitle = [{
  key: 'article',
  tab: 'article',
}, {
  key: 'app',
  tab: 'app',
}, {
  key: 'project',
  tab: 'project',
}];

const contentListNoTitle = {
  article: <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. It is a
    long established fact that a reader will be distracted by the readable content of a page when looking at its
    layout.</p>,
  app: <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
    search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>,
  project: <p>It is a long established fact that a reader will be distracted by the readable content of a page when
    looking at its layout.</p>,
};

class WithTabs extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: 'article',
  };
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({[type]: key});
  };

  render() {
    return (
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card title="Card title"
                extra={<span className="gx-link">More</span>}
                tabList={tabList}
                onTabChange={(key) => {
                  this.onTabChange(key, 'key');
                }}
          >
            {contentList[this.state.key]}
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card
            tabList={tabListNoTitle}
            onTabChange={(key) => {
              this.onTabChange(key, 'noTitleKey');
            }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </Col>
      </Row>
    );
  }
}


export default WithTabs;
