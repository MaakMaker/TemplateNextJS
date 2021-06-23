import { SmileOutlined } from '@ant-design/icons';
import {Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Card, Col} from 'antd';
import React from "react";

const FormItem = Form.Item;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 5},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 18},
    md: {span: 16},
    lg: {span: 12},
  },
};

const CustomizedValidation = () => {
  return (
    <Card className="gx-card" title="CUSTOMIZED VALIDATION">
    <Form>
      <Form.Item {...formItemLayout}
        label="Fail"
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input placeholder="unavailable choice" id="error"/>
      </Form.Item>

      <Form.Item label="Warning" validateStatus="warning" {...formItemLayout}>
        <Input placeholder="Warning" id="warning" prefix={<SmileOutlined/>}/>
      </Form.Item>

      <Form.Item {...formItemLayout}
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Input placeholder="I'm the content is being validated" id="validating"/>
      </Form.Item>

      <Form.Item label="Success" hasFeedback validateStatus="success" {...formItemLayout}>
        <Input placeholder="I'm the content" id="success"/>
      </Form.Item>

      <Form.Item label="Warning" hasFeedback validateStatus="warning" {...formItemLayout}>
        <Input placeholder="Warning" id="warning2"/>
      </Form.Item>

      <Form.Item {...formItemLayout}
        label="Fail"
        hasFeedback
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input placeholder="unavailable choice" id="error2"/>
      </Form.Item>

      <Form.Item label="Success" hasFeedback validateStatus="success" {...formItemLayout}>
        <DatePicker
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item label="Warning" hasFeedback validateStatus="warning" {...formItemLayout}>
        <TimePicker
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item label="Error" hasFeedback validateStatus="error" {...formItemLayout}>
        <Select>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </Form.Item>

      <Form.Item {...formItemLayout}
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Cascader options={[]}/>
      </Form.Item>

      <FormItem
        label="inline"
        {...formItemLayout}
      >

        <div className="ant-row gx-form-row0">
          <Col xs={24} sm={11}>
            <FormItem validateStatus="error" help="Please select the correct date">
              <DatePicker/>
            </FormItem>
          </Col>
          <Col xs={24} sm={2}>
          <span style={{display: 'inline-block', width: '100%', textAlign: 'center'}}>
            -
          </span>
          </Col>
          <Col xs={24} sm={11}>
            <FormItem>
              <DatePicker/>
            </FormItem>
          </Col>
        </div>
      </FormItem>

      <Form.Item label="Success" hasFeedback validateStatus="success" {...formItemLayout}>
        <InputNumber
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item label="Success" hasFeedback validateStatus="success" {...formItemLayout}>
        <Input allowClear placeholder="with allowClear"/>
      </Form.Item>

      <Form.Item label="Warning" hasFeedback validateStatus="warning" {...formItemLayout}>
        <Input.Password placeholder="with input password"/>
      </Form.Item>

      <Form.Item label="Error" hasFeedback validateStatus="error" {...formItemLayout}>
        <Input.Password allowClear placeholder="with input password and allowClear"/>
      </Form.Item>
    </Form>
    </Card>
  );
}
export default CustomizedValidation;
