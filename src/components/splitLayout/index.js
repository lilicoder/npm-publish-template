import React from "react";
import { Row } from "tinper-bee";
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
