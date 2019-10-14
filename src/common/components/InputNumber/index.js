import React from "react";
import "./index.less";
import { InputNumber } from "tinper-bee";
let MainInputNumber = props => {
  return (
    <InputNumber
      iconStyle="one"
      precision={props.precision || 2}
      value={props.value}
      onChange={props.onChange}
      className="iot-input-number"
    />
  );
};
export default MainInputNumber;
