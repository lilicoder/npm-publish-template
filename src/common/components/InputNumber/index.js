import React from "react";
import "./index.less";
import { InputNumber } from "tinper-bee";

let MainInputNumber = props => {
  //   const t = useRef("kk");
  //     useEffect(() => {
  //         document.title = `You clicked ${count} times`;
  //     });
  return (
    <InputNumber
      iconStyle="one"
      precision={props.precision || 2}
      value={props.value}
      onChange={props.onChange}
      toThousands={true}
      className="iot-input-number"
      tabindex="10000"
      max={props.max}
      min={props.min}
    />
  );
};
export default MainInputNumber;
