import React from "react";
import { Row, Col } from "tinper-bee";
// import PropTypes from "prop-types";
import { getComponentChild } from "../utils";
import "./index.less";
import noData from "./nodata-search.png";
let IndexView = props => {
  return (
    <div className="main-layout">
      <Row className="header">{getComponentChild(props.header)}</Row>
      <Row className="content">
        <Col md={12} className={"full"}>
          {props.content && props.content.length > 0 ? (
            getComponentChild(props.content)
          ) : (
            <div className="no-data">
              <img src={noData} alt="no-data" />
              <p>暂无数据</p>
            </div>
          )}
        </Col>
      </Row>
      <Row className="footer">{getComponentChild(props.footer)}</Row>
    </div>
  );
};
// IndexView.propTypes = {
//   content: PropTypes.array || PropTypes.object,
//   header: PropTypes.array || PropTypes.object,
//   footer: PropTypes.array || PropTypes.object
// };
IndexView.defaultProps = {
  content: [],
  header: [],
  footer: []
};

export default IndexView;
