import React from "react";
import { FormControl } from "tinper-bee";
import "./index.less";
let SearchInput = props => {
  return (
    <FormControl
      className="iot-search"
      value={props.value}
      placeHolder={props.placeHolder}
      onSearch={props.onSearch}
      onChange={v => props.onChange && props.onChange(v)}
      type="search"
    />
  );
};
export default SearchInput;
