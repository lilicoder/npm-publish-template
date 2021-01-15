/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:12:23
 */
import React from "react";
import FormControl from "bee-form-control";
import "bee-form-control/build/FormControl.css";
import Tooltip from "bee-tooltip";
import "bee-tooltip/build/Tooltip.css";
import ErrorTip from "../errorTip";
import "./index.less";
let Input = (props) => {
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
          onChange={(v) => props.onChange && props.onChange(v)}
          size={props.size || "md"}
          disabled={props.disabled}
        />
      </Tooltip>
    </div>
  );
};
export default Input;
