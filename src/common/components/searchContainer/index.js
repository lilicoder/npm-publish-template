/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:19:57
 */
import React from "react";
import { Col } from "bee-layout";
import "bee-layout/build/Layout.css";
import "./index.less";

const IndexView = (props) => {
  return (
    <div className="search">
      {props.data.map((item, index) => (
        <Col
          md={3}
          className={{
            "split-line": item && item.props.splitLine,
            right: item && item.props.right,
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
