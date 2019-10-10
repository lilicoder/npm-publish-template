import React from "react";
import { Col } from "tinper-bee";
import "./index.less";

const IndexView = props => {
  return (
    <div className="search">
      {props.data.map(item => (
        <Col
          md={3}
          className={{
            "split-line": item && item.props.splitLine,
            right: item && item.props.right
          }}
        >
          {item}
        </Col>
      ))}
    </div>
  );
};

export default IndexView;
