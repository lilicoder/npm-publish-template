import React from "react";
import { Row } from "tinper-bee";
// import PropTypes from "prop-types";
import { getComponentChild } from "./../utils";
import "./index.less";

let IndexView = props => {
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
  footer: []
};

export default IndexView;
