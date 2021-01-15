/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:21:48
 */
import React from "react";
import Select from "bee-select";
import "bee-select/build/Select.css";
import Tooltip from "bee-tooltip";
import "bee-tooltip/build/Tooltip.css";
import PropTypes from "prop-types";
import "./index.less";
import ErrorTip from "../errorTip";
const Option = Select.Option;
let IndexView = (props) => {
  return (
    <div className="iot-select-container">
      {props.label && <div className="label">{props.label}</div>}
      <Tooltip
        inverse
        visible={props.showError && props.showErrorText}
        placement="top"
        overlay={<ErrorTip value={props.errorText} />}
        className="error-tip"
      >
        <Select
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeHolder || "请选择"}
          allowClear={true}
          dropdownClassName="iot-select-dropdown"
          className={props.showError ? "error-input iot-select" : "iot-select"}
          size={props.size || "md"}
          disabled={props.disabled}
        >
          {props.data.map((item) => (
            <Option key={item.code} value={item.code}>
              {item.value}
            </Option>
          ))}
        </Select>
      </Tooltip>
    </div>
  );
};
IndexView.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
};
IndexView.defaultProps = {
  data: [],
  onChange: () => {},
};

export default IndexView;
