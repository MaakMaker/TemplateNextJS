import React from "react";
import {AutoComplete, Card, Input} from "antd";
import {SearchOutlined} from '@ant-design/icons';

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const dataSource = [{
  title: 'g-axon',
  children: [{
    title: 'AntDesign',
    count: 10000,
  }, {
    title: 'AntDesign UI',
    count: 10600,
  }],
}, {
  title: 'jumbo',
  children: [{
    title: 'jumbo UI',
    count: 60100,
  }, {
    title: 'AntDesign',
    count: 30010,
  }],
}, {
  title: 'React',
  children: [{
    title: 'AntDesign 2.0',
    count: 100000,
  }],
}];

function renderTitle(title) {
  return (
    <span>
      {title}
      <a
        style={{float: 'right'}}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >version 1.1
      </a>
    </span>
  );
}

const options = dataSource.map(group => (
  <OptGroup
    key={group.title}
    label={renderTitle(group.title)}
  >
    {group.children.map(opt => (
      <Option key={opt.title} value={opt.title}>
        {opt.title}
        <span className="certain-search-item-count">{opt.count}</span>
      </Option>
    ))}
  </OptGroup>
)).concat([
  <Option disabled key="all" className="show-all">
    <a
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      version 1.2
    </a>
  </Option>,
]);

const LookupPatterns = () => {
    return (
      <Card className="gx-card" title="Lookup Patterns">
        <div className="certain-category-search-wrapper" style={{width: 250}}>
          <AutoComplete
            className="certain-category-search"
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={false}
            dropdownStyle={{width: 300}}
            size="large"
            style={{width: '100%'}}
            dataSource={options}
            placeholder="input here"
            optionLabelProp="value"
          >
            <Input suffix={<SearchOutlined/>}/>
          </AutoComplete>
        </div>
      </Card>
    );
  }
;

export default LookupPatterns;
