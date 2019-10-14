import React from "react";
import { Col } from "tinper-bee";
import "./index.less";

const IndexView = props => {
  return (
    <div className="search">
      {props.data.map((item, index) => (
        <Col
          md={3}
          className={{
            "split-line": item && item.props.splitLine,
            right: item && item.props.right
          }}
          key={index}
        >
          {item}
        </Col>
      ))}
    </div>
  );
};

export default IndexView;
