/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-12-24 09:31:49
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:18:07
 */
import React, { Component } from "react";
import "./index.less";

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
