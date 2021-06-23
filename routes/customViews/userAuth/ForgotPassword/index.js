import React from "react";
import {Button, Form, Input} from "antd";
import IntlMessages from "../../../../util/IntlMessages";

const FormItem = Form.Item;


const ForgotPassword = () => {

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = values => {
    console.log("Received values of form",values)
  };

  return (
    <div className="gx-login-container">
      <div className="gx-login-content">

        <div className="gx-login-header">
          <img src={("/images/logo-white.png")} alt="wieldy" title="wieldy"/>
        </div>
        <div className="gx-mb-4">
          <h2>Forgot Your Password ?</h2>
          <p><IntlMessages id="app.userAuth.forgot"/></p>
        </div>

        <Form
          initialValues={{ remember: true }}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="gx-signin-form gx-form-row0">
          <FormItem name="email" rules={[{ required: true, message: 'Please input your E-mail!' }]}>
              <Input className='gx-input-lineheight' type="email" placeholder="E-Mail Address"/>
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">
              <IntlMessages id="app.userAuth.send"/>
            </Button>
          </FormItem>
        </Form>

      </div>
    </div>
  );
}

export default ForgotPassword
