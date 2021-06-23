import React from "react";
import {Button, Form, Input} from "antd";
import IntlMessages from "../../../../util/IntlMessages";

const FormItem = Form.Item;


const ResetPassword = () => {

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log("finish",values)
  };

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">

        <div className="gx-login-header">
          <img src={("/images/logo-white.png")} alt="wieldy" title="wieldy"/>
        </div>
        <div className="gx-mb-4">
          <h2>Reset Password</h2>
          <p><IntlMessages id="appModule.enterPasswordReset"/></p>
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

          <FormItem rules={ [{required: true, message: 'Please confirm your password!'}]} name="confirm">
            <Input className='gx-input-lineheight' placeholder="Retype New Password" type="password"/>
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">
              <IntlMessages id="app.userAuth.reset"/>
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
