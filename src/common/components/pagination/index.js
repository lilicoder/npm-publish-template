import React, { useState } from "react";
import "./index.less";
import { Pagination } from "tinper-bee";
let MainPagination = props => {
  const [activePage, setActivePage] = useState(1);
  const [dataNum, setDataNum] = useState(0);
  let paginationObj = {
    prev: true,
    next: true,
    gap: true,
    first: true,
    last: true,
    horizontalPosition: "right",
    maxButtons: 10,
    boundaryLinks: true,
    items: Math.ceil(props.totalPage / 10 / (dataNum + 1)), //一页显示多少条
    total: props.totalPage || 0, //总共多少条
    onSelect: value => {
      setActivePage(value);
      props.freshData && props.freshData(value);
    }, //点击下一页刷新的数据
    onDataNumSelect: x => {
      setDataNum(x);
      props.onDataNumSelect && props.onDataNumSelect(x);
    },
    showJump: true,
    activePage: activePage
  };
  return <Pagination className="iot-pagination" {...paginationObj} />;
};

export default MainPagination;
