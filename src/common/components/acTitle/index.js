import React, { Component } from "react";
import { SearchInput } from "../../index";
import "./index.less";
import { Icon } from "tinper-bee";

class AcTitle extends Component {
  render() {
    return (
      <div className="iot-ac-title-normal">
        <div className="ac-title">{this.props.title}</div>
        <div
          className={["ac-iot-btns", this.props.btnLeft ? "left" : ""].join(
            " "
          )}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default AcTitle;
