import React, { Component } from "react";
import "./index.less";
import { Pagination } from "tinper-bee";
class MainPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      dataNum: 10
    };
  }
  render() {
    let { activePage, dataNum } = this.state;
    let { props } = this;
    let paginationObj = {
      prev: true,
      next: true,
      gap: true,
      first: true,
      last: true,
      horizontalPosition: "right",
      maxButtons: 10,
      boundaryLinks: true,
      items: Math.ceil(props.totalPage / (props.dataNum || dataNum)), //一页显示多少条
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
        if (!props.dataNum) {
          this.setState({
            dataNum: y
          });
        }
        props.onDataNumSelect && props.onDataNumSelect(x);
      },
      showJump: true,
      activePage: props.activePage || activePage,
      dataNum: props.dataNum || dataNum
    };
    return <Pagination className="iot-pagination" {...paginationObj} />;
  }
}

export default MainPagination;
