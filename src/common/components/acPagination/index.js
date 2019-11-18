import React, { Component } from "react";
import "./index.less";
import { Pagination } from "tinper-bee";
class MainPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      dataNum: 1,
      dataNumSelect: 10
    };
  }
  render() {
    let { activePage, dataNum, dataNumSelect } = this.state;
    let { props } = this;
    let paginationObj = {
      gap: true,
      prev: true,
      next: true,
      horizontalPosition: "right",
      maxButtons: 10,
      size: "sm",
      boundaryLinks: true,
      items: Math.ceil(props.totalPage / dataNumSelect),
      total: props.totalPage || 0, //总共多少条
      onSelect: value => {
        if (!props.activePage) {
          this.setState({
            activePage: value
          });
        }
        props.freshData && props.freshData(value);
      }, //点击下一页刷新的数据
      onDataNumSelect: (x, y) => {
        // if (!props.dataNum) {
        this.setState({
          dataNum: x,
          dataNumSelect: y
        });
        // }
        props.onDataNumSelect && props.onDataNumSelect(y, x);
      },
      showJump: true,
      activePage: props.activePage || activePage,
      dataNum: props.dataNum || props.dataNum === 0 ? props.dataNum : dataNum
    };
    return (
      <div className="iot-ac-pagination-con">
        {this.props.showSelect ? (
          <div className="info">
            <div>
              已选<span>{props.selectedNum || 0}</span>条
            </div>
            <div
              className="selectAll"
              onClick={() => props.selectAll && props.selectAll()}
            >
              选择全部
            </div>
            <div
              className="selectReverse"
              onClick={() => props.selectReverse && props.selectReverse()}
            >
              反选
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
