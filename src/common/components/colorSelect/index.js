import React from "react";
import { Select, Tooltip } from "tinper-bee";
import PropTypes from "prop-types";
import ErrorTip from "../errorTip";
import "./index.less";
const Option = Select.Option;
const defaultData = [
  {
    value: "Blue"
  },
  {
    value: "Yellow"
  },
  {
    value: "Orange"
  },
  {
    value: "Red"
  },
  {
    value: "Crimson"
  }
];
let IndexView = props => {
  let selectColor = props.value || "Blue";
  return props.disabled ? (
    <div
      className={"color-select-option " + selectColor}
      style={{ width: "75%" }}
    ></div>
  ) : (
    <Tooltip
      inverse
      visible={props.showError}
      placement="top"
      overlay={<ErrorTip value={props.errorText} />}
      className="select-tip"
    >
      <Select
        defaultValue={selectColor}
        onChange={value => {
          props.onChange(value);
        }}
        allowClear={true}
        className={selectColor + " color-select iot-select"}
      >
        {(props.data.length > 0 ? props.data : defaultData).map(item => (
          <Option
            key={item.value}
            value={item.value}
            className={"color-select-option " + item.value}
          >
            {/* <div className="option-value">{item.value}</div> */}
          </Option>
        ))}
      </Select>
    </Tooltip>
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
