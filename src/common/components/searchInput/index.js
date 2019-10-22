import React from "react";
import { FormControl, Tooltip } from "tinper-bee";
import ErrorTip from "../errorTip";
import "./index.less";
let SearchInput = props => {
  return (
    <div className="iot-input-container">
      {props.label && <div className="label">{props.label}</div>}
      <Tooltip
        inverse
        visible={props.showError}
        placement="top"
        overlay={<ErrorTip value={props.errorText} />}
        className="error-tip"
      >
        <FormControl
          className={props.showError ? "error-input iot-search" : "iot-search"}
          value={props.value}
          placeHolder={props.placeHolder}
          onSearch={props.onSearch}
          onChange={v => props.onChange && props.onChange(v)}
          type="search"
        />
      </Tooltip>
    </div>
  );
};
export default SearchInput;
