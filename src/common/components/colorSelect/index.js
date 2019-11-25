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
      style={{ width: "60%",height:26 }}
    ></div>
  ) : (
    <Tooltip
      inverse
      visible={props.showError && props.showErrorText}
      placement="top"
      overlay={<ErrorTip value={props.errorText} />}
      className="error-tip"
    >
      <Select
        defaultValue={selectColor}
        onChange={value => {
          props.onChange(value);
        }}
        size={props.size || "md"}
        allowClear={true}
        className={[
          selectColor,
          "color-select",
          "iot-select",
          props.showError && "error-input"
        ].join(" ")}
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
