import React, { Component } from "react";
import { FormControl, Table } from "tinper-bee";

import Layout from "../../components/splitLayout";
import Grid from "bee-complex-grid";
import SearchContainer from "../../components/searchContainer";
import "./index.less";

const columns = [
  {
    title: "序号",
    dataIndex: "index",
    width: "290",
    render: (text, record, index) => {
      return index;
    },
    fixed: "left"
  },
  {
    title: "用户名",
    dataIndex: "a",
    key: "a",
    width: 580,
    className: "rowClassName"
  },
  { id: "123", title: "性别", dataIndex: "b", key: "b", width: 80 },
  { title: "年龄", dataIndex: "c", key: "c", width: 200 }
];

const data = [...new Array(15)].map((e, i) => {
  const rs = { a: i + "a", b: i + "b", c: i + "c", d: i + "d", key: i };
  if (i % 3 === 0) {
    rs.b = "女";
  }
  return rs;
});

class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let paginationObj = {
      items: 10, //一页显示多少条
      total: 100, //总共多少条
      freshData: this.freshData, //点击下一页刷新的数据
      onDataNumSelect: this.onDataNumSelect, //每页大小改变触发的事件
      noBorder: true,
      gap: true
    };
    let header = [
      <SearchContainer
        data={[
          <FormControl
            placeHolder="请输入搜索内容"
            type="search"
            onSearch={() => console.log(123)}
            splitLine
          />,
          null,
          null,
          <div className="right-button">
            <button className="border-button mr-10">导入</button>
            <button className="border-button">导出</button>
          </div>
        ]}
      />,
      <Grid
        className="demo"
        columns={columns}
        data={data}
        getSelectedDataFunc={this.getSelectedDataFunc}
        paginationObj={paginationObj}
        // loadLazy={true}
        // heigth={40}
        // hoverContent={this.getHoverContent}
        // onRowHover={this.onRowHover}
      />
    ];
    let content = [
      <SearchContainer
        data={[
          <FormControl
            placeHolder="请输入搜索内容"
            type="search"
            onSearch={() => console.log(123)}
            splitLine
          />,
          null,
          null,
          <div className="right-button">
            <button className="border-button mr-10">导入</button>
            <button className="border-button">导出</button>
          </div>
        ]}
      />,
      <Table
        columns={columns}
        data={data}
        // getSelectedDataFunc={this.getSelectedDataFunc}
        // paginationObj={paginationObj}
        // loadLazy={true}
        // heigth={40}
        // hoverContent={this.getHoverContent}
        // onRowHover={this.onRowHover}
      />
    ];

    return <Layout header={header} content={content} />;
  }
}

export default IndexView;
