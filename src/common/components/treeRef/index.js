/**
 *
 * @title 基础示例2
 * @description RefTreeWithInput
 *
 */

import React, { Component } from "react";
import { RefTreeWithInput } from "ref-tree";
import { Tooltip } from "tinper-bee";
import ErrorTip from "../errorTip";
import "ref-tree/lib/index.css";
import "./index.less";

import request from "./../utils/request";
class TreeRef extends Component {
  constructor() {
    super();
    this.state = {
      treeData: [],
      matchData: [{ name: "用友集团", refname: "用友集团", code: "001" }],
      value: null
    };
  }

  canClickGoOn = () => {
    this.loadData();
    return true; //必须要有
  };
  /**
   * @msg: 请求mock数据
   */
  loadData = async () => {
    this.setState({
      loading: true
    });
    let ajax = {
      url: this.props.fetchDataUrl
    };
    let results = await request(ajax);
    results = results.data;
    let treeData = [];
    if (!results || !results.data.length) {
      this.setState({
        pageCount: -1, //不展示分页
        treeData
      });
      return false;
    }
    treeData = results.data;
    let page = results.page;
    this.setState({
      treeData,
      ...page
    });
  };

  onSave = result => {
    this.setState({
      matchData: result
    });
    this.props.onSave(result);
  };

  render() {
    const { treeData, matchData, value } = this.state;
    const { title, placeholder } = this.props;
    return (
      <div className="iot-tree-ref-container">
        {this.props.label && <div className="label">{this.props.label}</div>}

        <Tooltip
          inverse
          visible={this.props.showError}
          placement="top"
          overlay={<ErrorTip value={this.props.errorText} />}
          className="error-tip"
        >
          <RefTreeWithInput
            title={title}
            placeholder={placeholder}
            emptyBut={true}
            nodeDisplay={record => {
              return record.refname;
            }}
            displayField={record => {
              return record.code;
            }} //显示内容的键
            valueField={"code"} //真实 value 的键
            // multiple={true}
            onSave={this.onSave}
            matchData={matchData}
            treeData={treeData}
            canClickGoOn={this.canClickGoOn}
            value={value}
            wrapClassName="iot-tree-ref-input"
            className="iot-tree-ref"
            style={{ width: "100%" }}
          />
        </Tooltip>
      </div>
    );
  }
}
export default TreeRef;
