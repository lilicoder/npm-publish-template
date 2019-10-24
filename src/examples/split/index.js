import React, { Component } from "react";

import {
  SplitLayout as Layout,
  MainGrid as Grid,
  SearchContainer,
  SearchInput,
  InputNumberGroup
} from "../../common";
import "./index.less";

const columns = [
  {
    title: "序号",
    dataIndex: "index",
    width: "100",
    render: (text, record, index) => {
      return index + 1;
    },
    fixed: "left"
  },
  {
    title: "用户名",
    dataIndex: "a",
    key: "a",
    width: 260,
    className: "rowClassName",
    render: () => <InputNumberGroup />
  },
  { id: "123", title: "性别", dataIndex: "b", key: "b", width: 80 },
  { title: "年龄", dataIndex: "c", key: "c", width: 200 },
  { title: "年龄", dataIndex: "c", key: "c", width: 200 },
  { title: "年龄", dataIndex: "c", key: "c", width: 200 }
];

const data = [...new Array(30)].map((e, i) => {
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
          <SearchInput
            placeHolder="请输入搜索内容1"
            onSearch={v => console.log(v)}
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
        full
      />
    ];
    let content = [
      <SearchContainer
        data={[
          <SearchInput
            placeHolder="请输入搜索内容"
            onSearch={() => console.log(123)}
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
        onRowClick={(record, index) => alert(index)}
        columns={columns}
        data={data}
        hidePagination={true}
        full

        // loading={true}
      />
    ];

    return <Layout header={header} content={content} />;
  }
}

export default IndexView;
