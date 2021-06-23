import React from "react";
import {Avatar, Button, Form, Input} from "antd";
import IntlMessages from "../../../../util/IntlMessages";

const FormItem = Form.Item;

const LockScreen = () => {

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="gx-login-container">
      <div className="gx-login-content gx-text-center">

        <div className="gx-login-header">
          <Avatar shape="circle" className="gx-size-120" src={"https://via.placeholder.com/150"}/>
        </div>
        <div className="gx-mb-4">
          <h3>John Smith</h3>
          <p><IntlMessages id="appModule.enterPasswordUnlock"/></p>
        </div>

        <Form
          initialValues={{ remember: true }}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="gx-signin-form gx-form-row0">
          <FormItem rules={ [{required: true, message: 'Please input your Password!'}]} name="password">
              <Input className='gx-input-lineheight' type="password" placeholder="Password"/>
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">
              <IntlMessages id="app.userAuth.unLock"/>
            </Button>
          </FormItem>
        </Form>

      </div>
    </div>
  );
};

export default LockScreen;
