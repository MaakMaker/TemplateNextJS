import React, {useEffect} from "react";
import {Button, Card, Checkbox, Form, Input, message} from "antd";
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import "./horizontalLoginForm.css";
import CircularProgress from "../../../../app/components/CircularProgress";
import {useAuth} from "../../../../util/use-auth";

const FormItem = Form.Item;

const HorizontalLoginForm = () => {
  const {isLoading, error} = useAuth();

  useEffect(() => {
    if (error) {
      message.error(error.toString()).then(r => r);
    }
  }, [error]);

  const onFinishFailed = errorInfo => {
    console.log('onFinishFailed:', errorInfo);
  };

  const onFinish = values => {
    console.log('onFinish:', values);
  };


  return (
    <Card className="gx-card" title="Horizontal Login Form">
      <Form
        initialValues={{remember: true}}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="gx-login-form gx-form-row0">
        <FormItem rules={[{required: true, message: 'Please input your E-mail!'}]}
                  name="email"
                  initialValue="demo@example.com">

          <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                 placeholder="Email"/>
        </FormItem>
        <FormItem rules={[{required: true, message: 'Please input your Password!'}]}
                  name="password"
                  initialValue="demo#123">

          <Input prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                 type="password"
                 placeholder="Password"/>
        </FormItem>
        <FormItem name="remember" valuePropName="checked">
            <span className='gx-d-block gx-mb-2'>
              <Checkbox>Remember me</Checkbox>
            <span className="gx-link login-form-forgot">Forgot password</span>
            </span>
          <Button type="primary" htmlType="submit" className="login-form-button gx-mt-1">
            Log in
          </Button>
          <span className='gx-d-block gx-mt-2'>
            Or <span className="gx-link">register now!</span>
            </span>
        </FormItem>
      </Form>

      {isLoading &&
      <div className="gx-loader-view">
        <CircularProgress/>
      </div>}
    </Card>
  );
}

export default HorizontalLoginForm;
