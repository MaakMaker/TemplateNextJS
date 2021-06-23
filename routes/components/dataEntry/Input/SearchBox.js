import React from "react";
import {Card, Input} from "antd";

const Search = Input.Search;

const SearchBox = () => {
  return (
    <Card className="gx-card" title="Search Box">
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{width: 200}}
      />

      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
      />

      <Search placeholder="input search text" enterButton="Search" size="large"/>
    </Card>
  );
};

export default SearchBox;
