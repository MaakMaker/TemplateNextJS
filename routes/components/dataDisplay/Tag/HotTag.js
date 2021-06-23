import React, {useState} from "react";
import {Card, Tag} from "antd";

const CheckableTag = Tag.CheckableTag;

const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

const HotTag = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked ?
      [...selectedTags, tag] :
      selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <Card title="Hot Tag" className="gx-card">
      <h6 style={{marginRight: 8, display: 'inline'}}>Categories:</h6>
      {tagsFromServer.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Card>
  );
}

export default HotTag;
