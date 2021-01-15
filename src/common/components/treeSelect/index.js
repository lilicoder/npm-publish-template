/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:23:45
 */
import React from "react";
import PropTypes from "prop-types";
import Tooltip from "bee-tooltip";
import "bee-tooltip/build/Tooltip.css";
import TreeSelect from "bee-tree-select";
import ErrorTip from "../errorTip";

import "bee-tree-select/build/TreeSelect.css";
import "./index.less";

let IndexView = (props) => {
  return (
    <div className="iot-tree-select-container">
      {props.label && <div className="label">{props.label}</div>}
      <Tooltip
        inverse
        visible={props.showError && props.showErrorText}
        placement="top"
        overlay={<ErrorTip value={props.errorText} />}
        className="error-tip"
      >
        <TreeSelect
          showSearch
          value={props.value}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder={props.placeholder || "请选择"}
          allowClear
          disabled={props.disabled}
          // treeDefaultExpandAll
          treeData={props.treeData}
          // onChange={this.onChange}
          onSelect={props.onSelect}
          size={props.size || "md"}
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
  value: PropTypes.string,
};
IndexView.defaultProps = {
  treeData: [],
  onSelect: () => {},
  value: "",
};

export default IndexView;
