/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:22:01
 */
import React from "react";
import { Row } from "bee-layout";
import { getComponentChild } from "./../utils";
import "./index.less";

let IndexView = (props) => {
  return (
    <div className="split-layout">
      <Row className="top">{getComponentChild(props.header)}</Row>
      <Row className="bottom">{getComponentChild(props.content)}</Row>
    </div>
  );
};
// IndexView.propTypes = {
//   content: PropTypes.Component || PropTypes.array,
//   header: PropTypes.Component || PropTypes.array,
//   footer: PropTypes.Component || PropTypes.array
// };
IndexView.defaultProps = {
  content: [],
  header: [],
  footer: [],
};

export default IndexView;
