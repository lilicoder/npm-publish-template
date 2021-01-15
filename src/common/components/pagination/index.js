/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:18:24
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
      dataNum: 1,
    };
  }
  render() {
    let { activePage, dataNum, dataNumSelect } = this.state;
    let { props } = this;
    let itemNum = dataNumSelect;
    if (props.dataNum || props.dataNum === 0) {
      itemNum = (props.dataNum + 1) * 5;
    }
    let paginationObj = {
      prev: true,
      next: true,
      gap: true,
      first: true,
      last: true,
      horizontalPosition: "right",
      maxButtons: 10,
      boundaryLinks: true,
      items: Math.ceil(props.totalPage / itemNum), //一页显示多少条
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
      showJump: true,
      activePage: props.activePage || activePage,
      dataNum: props.dataNum || props.dataNum === 0 ? props.dataNum : dataNum,
    };
    return <Pagination className="iot-pagination" {...paginationObj} />;
  }
}

export default MainPagination;
