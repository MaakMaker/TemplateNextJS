import React, {Component} from "react";
import {Button, Card, Form, Input} from "antd";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import LockOutlined from "@ant-design/icons/lib/icons/LockOutlined";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Basic extends Component {


  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  onFinish = values => {
    console.log('Received values of form: ', values);

  };

  render() {
    return (
      <Card className="gx-card" title="Basic">
        <Form
          initialValues={{remember: true}}
          name="basic"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          layout="inline">

          <FormItem rules={[{required: true, message: 'Please input your username!\'}'}]} name="uaername">

            <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                   placeholder="Username"/>
          </FormItem>

          <FormItem rules={[{required: true, message: 'Please input your Password!'}]} name="password">
            <Input prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                   type="password"
                   placeholder="Password"/>
          </FormItem>
          <FormItem>
            <Button className="gx-mb-0"
                    type="primary"
                    htmlType="submit"
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

export default Basic;

