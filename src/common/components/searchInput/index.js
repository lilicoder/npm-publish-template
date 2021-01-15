/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:20:55
 */
import React, { Component } from "react";
import FormControl from "bee-form-control";
import "bee-form-control/build/FormControl.css";
import Tooltip from "bee-tooltip";
import "bee-tooltip/build/Tooltip.css";
import Icon from "bee-icon";
import "bee-icon/build/Icon.css";
import ErrorTip from "../errorTip";
import "./index.less";
class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  handleChange(v) {
    this.setState({
      value: v,
    });
    this.props.onChange && this.props.onChange(v);
  }
  render() {
    let { props } = this;
    return (
      <div
        className={
          !!props.value || !!this.state.value
            ? "iot-input-container show-close"
            : "iot-input-container"
        }
      >
        {props.label && <div className="label">{props.label}</div>}
        <Tooltip
          inverse
          visible={props.showError && props.showErrorText}
          placement="top"
          overlay={<ErrorTip value={props.errorText} />}
          className="error-tip"
        >
          <div style={{ width: "100%" }}>
            <FormControl
              className={
                props.showError ? "error-input iot-search" : "iot-search"
              }
              value={props.value || this.state.value}
              placeHolder={props.placeHolder}
              onSearch={props.onSearch}
              onChange={(v) => this.handleChange(v)}
              type="search"
              size={props.size || "md"}
              disabled={props.disabled}
            />
            <Icon
              type="uf-close-c"
              className="close-icon"
              onClick={() => this.handleChange("")}
            />
          </div>
        </Tooltip>
      </div>
    );
  }
}

export default SearchInput;
