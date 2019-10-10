import React, { Component } from "react";
import { Row, Col, Icon, Tile } from "tinper-bee";
import PropTypes from "prop-types";
import "./index.less";

let IndexView = props => {
  return (
    <div className="split-layout">
      <Row className="top">{props.header}</Row>
      <Row className="bottom">{props.content}</Row>
    </div>
  );
};
// IndexView.propTypes = {
//   content: PropTypes.Component,
//   header: PropTypes.Component,
//   footer: PropTypes.Component
// };
IndexView.defaultProps = {
  // content: [],
  // header: [],
  // footer: []
};

export default IndexView;
