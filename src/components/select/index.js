import React from "react";
import { Select, Tooltip } from "tinper-bee";
import PropTypes from "prop-types";
import "./index.less";
import ErrorTip from "../errorTip";
const Option = Select.Option;
let IndexView = props => {
  return (
    <Tooltip
      inverse
      visible={props.showError}
      placement="top"
      overlay={<ErrorTip value={props.errorText} />}
      className="select-tip"
    >
      <Select
        value={props.value}
        style={{ width: "100%" }}
        onChange={props.onChange}
        placeholder="请选择"
        allowClear={true}
        className="iot-select"
      >
        {props.data.map(item => (
          <Option key={item.code} value={item.code}>
            {item.value}
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