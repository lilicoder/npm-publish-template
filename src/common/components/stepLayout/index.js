/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-12-24 09:31:49
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:22:39
 */
import React from "react";
import { Row } from "bee-layout";
import { getComponentChild } from "./../utils";
import "./index.less";

let IndexView = (props) => {
  return (
    <div className="step-layout">
      <Row className="top">{getComponentChild(props.header)}</Row>
      <Row className="content">{getComponentChild(props.content)}</Row>
      <Row className="footer">{getComponentChild(props.footer)}</Row>
    </div>
  );
};
IndexView.defaultProps = {
  content: [],
  header: [],
  footer: [],
};

export default IndexView;
