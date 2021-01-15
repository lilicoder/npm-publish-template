/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:13:22
 */
import React from "react";
import "./index.less";
import Tooltip from "bee-tooltip";
import "bee-tooltip/build/Tooltip.css";
import InputNumber from "bee-input-number";
import "bee-input-number/build/InputNumber.css";
import ErrorTip from "../errorTip";
const InputNumberGroup = InputNumber.InputNumberGroup;
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
          disabled={props.disabled}
        />
      </Tooltip>
    </div>
  );
};
export default MainInputNumber;
