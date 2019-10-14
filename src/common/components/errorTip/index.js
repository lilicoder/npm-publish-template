import React from "react";
import "./index.less";
let ErrorTip = props => {
  return <div className="iot-input-error">{props.value}</div>;
};
export default ErrorTip;
