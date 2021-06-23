import React from "react";
import {Button, Card, Modal} from "antd";

class Position extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({modal1Visible});
  }

  setModal2Visible(modal2Visible) {
    this.setState({modal2Visible});
  }

  render() {
    return (
      <Card title="Position" className="gx-card">
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>Display a modal dialog at 20px to
          Top</Button>
        <Modal
          title="20px to Top"
          style={{top: 20}}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>Vertically centered modal dialog</Button>
        <Modal
          title="Vertically centered modal dialog"
          wrapClassName="vertical-center-modal"
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </Card>
    );
  }
}

export default Position;
