import React, { Component } from "react";
import { Select } from "tinper-bee";
import PropTypes from "prop-types";
import "./index.less";
const Option = Select.Option;
let IndexView = props => {
  let selectColor = props.value || "Red";
  return props.disabled ? (
    <div
      className={"color-select-option " + selectColor}
      style={{ width: "85%" }}
    ></div>
  ) : (
    <Select
      defaultValue={props.value || selectColor}
      onChange={value => {
        props.onChange(value);
      }}
      allowClear={true}
      className={selectColor + " color-select"}
    >
      {props.data.map(item => (
        <Option
          key={item.value}
          value={item.value}
          className={"color-select-option " + item.value}
        >
          {/* <div className="option-value">{item.value}</div> */}
        </Option>
      ))}
    </Select>
  );
};
IndexView.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func
};
IndexView.defaultProps = {
  data: [],
  onChange: () => {}
};

export default IndexView;
