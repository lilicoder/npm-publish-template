import React, { Component } from "react";
import { SearchInput } from "../../index";
import "./index.less";

class AcTitleBar extends Component {
  render() {
    return (
      <div className="iot-ac-title">
        {this.props.handleGoBack && (
          <img
            src={require("./left.png")}
            className="back"
            onClick={this.props.handleGoBack}
            alt="goback"
          />
          // <Icon
          //   type="uf-anglepointingtoleft"
          //   onClick={this.props.handleGoBack}
          // />
        )}
        <i className="icon">
          {this.props.icon || <img src={require("./icon.png")} alt="icon" />}
        </i>
        <div className="ac-title">{this.props.title}</div>
        {this.props.showSearch ? (
          <div className="ac-search-input">
            <SearchInput
              onSearch={this.props.onSearch}
              onChange={this.props.onChange}
              value={this.props.value}
              disabled={this.props.disabled}
              placeHolder={this.props.placeHolder || this.props.placeholder}
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
