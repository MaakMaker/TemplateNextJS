import React from "react";
import {Col, Row} from "antd";

import FixHeader from "./FixHeader";
import GroupTable from "./GroupTable";
import Operation from "./Operation";
import Dynamic from "./Dynamic";
import CustomSelection from "./CustomSelection";
import ResetFilter from "./ResetFilter";
import ExpandableRow from "./ExpandableRow";
import TreeData from "./TreeData";
import FixColumn from "./FixColumn";


const DataTable = () => {
  return (
    <Row>
      <Col span={24}>
        <FixHeader/>
      </Col>
      <Col span={24}>
        <GroupTable/>
      </Col>
      <Col span={24}>
        <Operation/>
      </Col>
      <Col span={24}>
        <Dynamic/>
      </Col>
      <Col span={24}>
        <CustomSelection/>
      </Col>
      <Col span={24}>
        <ResetFilter/>
      </Col>
      <Col span={24}>
        <ExpandableRow/>
      </Col>
      <Col span={24}>
        <TreeData/>
      </Col>
      <Col span={24}>
        <FixColumn/>
      </Col>
    </Row>
  );
};

export default DataTable;
