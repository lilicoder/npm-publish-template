import React, { Component } from "react";
import { SearchInput } from "../../index";
import "./index.less";
import {Icon} from "tinper-bee"

class AcTitleBar extends Component {
  render() {
    return (
      <div className="iot-ac-title">
       {this.props.handleGoBack&&<Icon type="uf-anglepointingtoleft" onClick={this.props.handleGoBack}/>}
        <i className="icon">{this.props.icon||<img src={require("./icon.png")}/>}</i>
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
