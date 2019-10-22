import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "tinper-bee";
import TreeSelect from "bee-tree-select";
import ErrorTip from "../errorTip";

import "bee-tree-select/build/TreeSelect.css";
import "./index.less";

let IndexView = props => {
  return (
    <div className="iot-tree-select-container">
      {props.label && <div className="label">{props.label}</div>}
      <Tooltip
        inverse
        visible={props.showError}
        placement="top"
        overlay={<ErrorTip value={props.errorText} />}
        className="error-tip"
      >
        <TreeSelect
          showSearch
          value={props.value}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder="请选择"
          allowClear
          // treeDefaultExpandAll
          treeData={props.treeData}
          // onChange={this.onChange}
          onSelect={props.onSelect}
          className={
            props.showError ? "error-input iot-tree-select" : "iot-tree-select"
          }
        />
      </Tooltip>
    </div>
  );
};
IndexView.propTypes = {
  treeData: PropTypes.array,
  onSelect: PropTypes.func,
  value: PropTypes.string
};
IndexView.defaultProps = {
  treeData: [],
  onSelect: () => {},
  value: ""
};

export default IndexView;
