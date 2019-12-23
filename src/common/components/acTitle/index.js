import React, { Component } from "react";
import "./index.less";

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
