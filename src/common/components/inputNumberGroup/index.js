import React from "react";
import "./index.less";
import { InputNumber } from "tinper-bee";
const InputNumberGroup = InputNumber.InputNumberGroup;
let MainInputNumber = props => {
  return (
    <InputNumberGroup
      iconStyle="two"
      onChange={this.handleChange}
      placeholder={["请输入最小值", "请输入最大值"]}
    />
  );
};
export default MainInputNumber;
