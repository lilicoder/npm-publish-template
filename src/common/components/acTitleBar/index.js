import React, { Component } from "react";
import { SearchInput } from "../../index";
import "./index.less";

class AcTitleBar extends Component {
  render() {
    return (
      <div className="iot-ac-title">
        <i>{this.props.icon}</i>
        <div className="ac-title">{this.props.title}</div>
        {this.props.showSearch ? (
          <div className="ac-search-input">
            <SearchInput
              onSearch={this.props.onSearch}
              onChange={this.props.onChange}
            />
          </div>
        ) : (
          ""
        )}
        <div className="ac-iot-btns">{this.props.children}</div>
      </div>
    );
  }
}
export default AcTitleBar;
