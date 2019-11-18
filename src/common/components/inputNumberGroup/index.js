import React from "react";
import "./index.less";
import { InputNumber, Tooltip } from "tinper-bee";
import ErrorTip from "../errorTip";
const InputNumberGroup = InputNumber.InputNumberGroup;
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
        <InputNumberGroup
          iconStyle="two"
          onChange={props.onChange}
          placeholder={props.placeholder || ["请输入最小值", "请输入最大值"]}
          precision={props.precision || 2}
          value={props.value}
          toThousands={true}
          className={
            props.showError
              ? "error-input iot-input-number-group"
              : "iot-input-number-group"
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
