import React, { Component } from "react";
import { Row, Col, Icon, Tile } from "tinper-bee";
import PropTypes from "prop-types";
import "./index.less";

let IndexView = props => {
  return (
    <div className="main-layout">
      <Row className="header">{props.header}</Row>
      <Row className="content">
        <Col md={12}>{props.content}</Col>
      </Row>
      <Row className="footer">
        <Col md={12}>{props.footer}</Col>
      </Row>
    </div>
  );
};
IndexView.propTypes = {
  content: PropTypes.Component | PropTypes.array,
  header: PropTypes.Component | PropTypes.array,
  footer: PropTypes.Component | PropTypes.array
};
IndexView.defaultProps = {
  // content: [],
  // header: [],
  // footer: []
};

export default IndexView;
