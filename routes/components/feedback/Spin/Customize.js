import React from "react";
import {Alert, Card, Spin} from "antd";

const Customize = () => {
  return (
    <Card title="Customize" className="gx-card">
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </Card>
  );
}
export default Customize;
