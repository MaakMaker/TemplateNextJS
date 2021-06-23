import React from "react";
import {Button, Card, Modal} from "antd";

class Asynchronously extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const {visible, confirmLoading, ModalText} = this.state;
    return (
      <Card title="Asynchronously" className="gx-card">
        <Button type="primary" onClick={this.showModal}>Open</Button>
        <Modal title="Title"
               visible={visible}
               onOk={this.handleOk}
               confirmLoading={confirmLoading}
               onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </Card>
    );
  }
}

export default Asynchronously;
