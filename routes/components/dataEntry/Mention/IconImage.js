import React, {useState} from "react";
import {Avatar, Card} from "antd";
import { Mention } from '@ant-design/compatible';

const Nav = Mention.Nav;

const webFrameworks = [
  {name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg'},
  {name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png'},
  {name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png'},
  {name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png'},
];

const IconImage = () => {

  const [suggestions, setSuggestions] = useState([]);

  const onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item =>
      item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav
        value={suggestion.name}
        data={suggestion}
        disabled={suggestion.disabled}
      >
        <Avatar
          src={suggestion.icon}
          size="small"
          style={{width: 14, height: 14, marginRight: 8, top: 2, position: 'relative'}}
        />
        {suggestion.name} - {suggestion.type}
      </Nav>
    ));
    setSuggestions(suggestions);
  };

    return (
      <Card className="gx-card" title="Icon Image">
        <Mention
          style={{width: '100%'}}
          suggestions={suggestions}
          onSearchChange={onSearchChange}
        />
      </Card>
    );
};

export default IconImage;
