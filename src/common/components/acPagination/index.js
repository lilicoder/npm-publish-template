/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-07 21:10:14
 */
import React, { Component } from "react";
import "./index.less";
import Pagination from "bee-pagination";
import "bee-pagination/build/Pagination.css";
class MainPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      dataNum: 0,
      dataNumSelect: 10,
      dataNumArray: [10, 20, 50, 100],
    };
  }
  render() {
    let { activePage, dataNum, dataNumSelect, dataNumArray } = this.state;
    let { props } = this;
    let itemNum = dataNumSelect;
    if (props.dataNum || props.dataNum === 0) {
      itemNum = dataNumArray[props.dataNum];
    }
    let paginationObj = {
      gap: true,
      prev: true,
      next: true,
      horizontalPosition: "right",
      maxButtons: 10,
      size: "sm",
      boundaryLinks: true,
      items: Math.ceil(props.totalPage / itemNum),
      total: props.totalPage || 0, //总共多少条
      onSelect: (value) => {
        if (!props.activePage) {
          this.setState({
            activePage: value,
          });
        }
        props.freshData && props.freshData(value);
      }, //点击下一页刷新的数据
      onDataNumSelect: (x, y) => {
        // if (!props.dataNum) {
        this.setState({
          dataNum: x,
          dataNumSelect: y,
        });
        // }
        props.onDataNumSelect && props.onDataNumSelect(y, x);
      },
      dataNumSelect: dataNumArray,
      showJump: true,
      activePage: props.activePage || activePage,
      dataNum: props.dataNum || props.dataNum === 0 ? props.dataNum : dataNum,
      local: props.local || {},
    };
    return (
      <div className="iot-ac-pagination-con">
        {this.props.showSelect ? (
          <div className="info">
            <div>
              {props.selectedText || "已选"}
              <span>{props.selectedNum || 0}</span>条
            </div>
            <div
              className="selectAll"
              onClick={() => props.selectAll && props.selectAll()}
            >
              {props.selectAllText || "选择全部"}
            </div>
            <div
              className="selectReverse"
              onClick={() => props.selectReverse && props.selectReverse()}
            >
              {props.selectReverseText || "反选"}
            </div>
          </div>
        ) : (
          ""
        )}
        <Pagination className="iot-ac-pagination" {...paginationObj} />
      </div>
    );
  }
}

export default MainPagination;
