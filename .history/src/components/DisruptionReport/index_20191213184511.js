import React from "react";
import { Statistic, Card, Row, Col, Icon } from "antd";

const DesruptionReport = () => {
  return (
    <div>
      <Statistic
        title="Active"
        value={11.28}
        precision={2}
        valueStyle={{ color: "#3f8600" }}
        prefix={<Icon type="arrow-up" />}
        suffix="%"
      />
    </div>
  );
};

export default DesruptionReport;
