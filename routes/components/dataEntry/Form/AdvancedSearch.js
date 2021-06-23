import React, { useState } from 'react';
import { Form, Row, Col, Input, Button ,Card} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const AdvancedSearch = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const getFields = () => {
    const count = expand ? 10 : 6;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col lg={8} md={8} sm={12} xs={24} key={i} style={{display: i < count ? 'block' : 'none'}}>
          <div className="gx-form-row0">
            <Form.Item
              name={`field-${i}`}
              label={`Field ${i}`}
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </div>
        </Col>,
      );
    }
    return children;
  };

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Card className="gx-card" title="Advanced Search">
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{ display: 'inline-block', verticalAlign: 'middle', marginBottom: 15, }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
    </Card>
  );
};

export default AdvancedSearch;
