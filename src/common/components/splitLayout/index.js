import React from "react";
import { Row } from "tinper-bee";
// import PropTypes from "prop-types";
import { getComponentChild } from "./../utils";
import "./index.less";

let IndexView = props => {
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
  footer: []
};

export default IndexView;
