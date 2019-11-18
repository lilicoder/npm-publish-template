import React from "react";
import { FormControl, Tooltip } from "tinper-bee";
import ErrorTip from "../errorTip";
import "./index.less";
let Input = props => {
  return (
    <div className="iot-input-container">
      {props.label && <div className="label">{props.label}</div>}
      <Tooltip
        inverse
        visible={props.showError && props.showErrorText}
        placement="top"
        overlay={<ErrorTip value={props.errorText} />}
        className="error-tip"
      >
        <FormControl
          className={props.showError ? "error-input iot-input" : "iot-input"}
          value={props.value}
          placeHolder={props.placeHolder}
          onChange={v => props.onChange && props.onChange(v)}
          size={props.size || "md"}
        />
      </Tooltip>
    </div>
  );
};
export default Input;
