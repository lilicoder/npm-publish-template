import React, { useState } from "react";
import { FormControl } from "tinper-bee";
import "./index.less";
let SearchInput = props => {
  let [value, setValue] = useState("");
  return (
    <FormControl
      className="iot-search"
      value={value || props.value}
      onSearch={props.onSearch}
      onChange={v => setValue(v)}
      type="search"
    />
  );
};
export default SearchInput;
