import React from "react";
import "./index.less";
import { Tooltip } from "tinper-bee";
import ErrorTip from "../errorTip";
import InputNumber from "bee-input-number";
import "bee-input-number/build/InputNumber.css";

let MainInputNumber = props => {
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
          onChange={v => {
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
