import React, { Component } from "react";
// import { SearchInput } from "../../index";
import "./index.less";
// import { Icon } from "tinper-bee";

class OprationBar extends Component {
  render() {
    return (
      <div className="iot-opration-title">
        <div className="left-btn">{this.props.leftBtn}</div>
        <div className="ac-iot-btns">{this.props.children}</div>
      </div>
    );
  }
}
export default OprationBar;
