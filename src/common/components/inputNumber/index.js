/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-12-24 09:31:49
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:12:58
 */
import React from "react";
import "./index.less";
import Tooltip from "bee-tooltip";
import "bee-tooltip/build/Tooltip.css";
import ErrorTip from "../errorTip";
import InputNumber from "bee-input-number";
import "bee-input-number/build/InputNumber.css";

let MainInputNumber = (props) => {
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
        <InputNumber
          iconStyle="one"
          precision={props.precision || 0}
          value={props.value}
          onChange={(v) => {
            props.onChange(v);
          }}
          disabled={props.disabled}
          toThousands={true}
          className={
            props.showError
              ? "error-input iot-input-number"
              : "iot-input-number"
          }
          max={props.max}
          min={props.min}
          size={props.size || "md"}
        />
      </Tooltip>
    </div>
  );
};
export default MainInputNumber;
