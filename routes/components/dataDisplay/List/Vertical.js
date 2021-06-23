import React from "react";
import {Avatar, Card, List} from "antd";
import Icon from '@ant-design/icons';

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: 'http://ant.design' +
      '' +
      '',
    title: `Ant design part ${i}`,
    avatar: "https://via.placeholder.com/290X193",
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const pagination = {
  pageSize: 10,
  current: 1,
  total: listData.length,
  onChange: (() => {
  }),
};

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
);

const Vertical = () => {
  return (
    <Card className="gx-card" title="Vertical">
      <List
        itemLayout="vertical"
        size="large"
        pagination={pagination}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,
              <IconText type="message" text="2"/>]}
            extra={<img className="gx-img-fluid" width={272} alt="logo"
                        src={item.avatar}/>}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar}/>}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Vertical;
