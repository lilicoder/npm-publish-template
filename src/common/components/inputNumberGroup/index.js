import React from "react";
import "./index.less";
import { InputNumber } from "tinper-bee";
const InputNumberGroup = InputNumber.InputNumberGroup;
let MainInputNumber = props => {
  return (
    <InputNumberGroup
      iconStyle="two"
      onChange={props.onChange}
      placeholder={props.placeholder || ["请输入最小值", "请输入最大值"]}
      precision={props.precision || 2}
      value={props.value}
      toThousands={true}
      className="iot-input-number-group"
      max={props.max}
      min={props.min}
    />
  );
};
export default MainInputNumber;
