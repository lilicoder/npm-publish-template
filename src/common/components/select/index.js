import React from "react";
import { Select, Tooltip } from "tinper-bee";
import PropTypes from "prop-types";
import "./index.less";
import ErrorTip from "../errorTip";
const Option = Select.Option;
let IndexView = props => {
  return (
    <div className="iot-select-container">
      {props.label && <div className="label">{props.label}</div>}
      <Tooltip
        inverse
        visible={props.showError}
        placement="top"
        overlay={<ErrorTip value={props.errorText} />}
        className="error-tip"
      >
        <Select
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeHolder || "请选择"}
          allowClear={true}
          className={props.showError ? "error-input iot-select" : "iot-select"}
        >
          {props.data.map(item => (
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
  onChange: PropTypes.func
};
IndexView.defaultProps = {
  data: [],
  onChange: () => {}
};

export default IndexView;
