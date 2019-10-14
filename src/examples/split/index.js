import React, { Component } from "react";
import { FormControl } from "tinper-bee";

import {
  SplitLayout as Layout,
  MainGrid as Grid,
  SearchContainer
} from "../../common";
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
        columns={columns}
        data={data}
        totalPage={50}
        freshData={x => console.log(x)}
        onDataNumSelect={x => console.log(x, "999")}
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
      <Grid
        columns={columns}
        data={data}
        totalPage={50}
        freshData={x => console.log(x)}
        onDataNumSelect={x => console.log(x, "999")}
      />
    ];

    return <Layout header={header} content={content} />;
  }
}

export default IndexView;
