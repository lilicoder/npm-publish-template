import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "tinper-bee";
import TreeSelect from "bee-tree-select";
import ErrorTip from "../errorTip";

import "bee-tree-select/build/TreeSelect.css";
import "./index.less";

let IndexView = props => {
  return (
    <Tooltip
      inverse
      visible={props.showError}
      placement="top"
      overlay={<ErrorTip value={props.errorText} />}
      className="select-tip"
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
        className="iot-tree-select"
      />
    </Tooltip>
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
