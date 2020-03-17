import React, { Component } from "react";
import { MainGrid as Grid, Select, ColorSelect } from "../../common";
const columns = [
  {
    title: "序号",
    dataIndex: "index",
    width: "90",
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
    className: "rowClassName",
    render: () => {
      return <ColorSelect disabled />;
    }
  },
  {
    title: "用户名",
    dataIndex: "a",
    key: "a",
    width: 580,
    className: "rowClassName"
  },
  { id: "123", title: "性别", dataIndex: "b", key: "b", width: 80 },
  { title: "年龄", dataIndex: "c", key: "c", width: 600 },
  {
    title: "操作",
    key: "d",
    width: 200,
    textAlign: "center",
    fixed: "right",
    render: (text, record, index) => (
      <div>
        {/* <button>编辑</button> */}
        <button>删除</button>
      </div>
    )
  }
];

const data = [...new Array(10)].map((e, i) => {
  const rs = { a: i + "a", b: i + "b", c: i + "c", d: i + "d", key: i };
  if (i % 3 === 0) {
    rs.b = <Select />;
  }
  return rs;
});
const data2 = [...new Array(10)].map((e, i) => {
  const rs = { a: i + "a", b: i + "b", c: i + "c", d: i + "d", key: i };
  if (i % 3 === 0) {
    rs.b = "111111111";
  }
  return rs;
});

class Demo4 extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      totalPage: 0
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ totalPage: 88 });
    }, 1500);
  }
  render() {
    return (
      <Grid
        columns={columns}
        data={this.state.data}
        totalPage={this.state.totalPage}
        // onRowClick={(a, i) => alert(i)}
        onRowHover={(a, i) => console.log(a, i, "KKKKK")}
        freshData={x => {
          console.log(1111);
          this.setState({ data: data2 });
        }}
        rowKey="key"
        dataNum={5}
        onDataNumSelect={(x, y) => {
          this.setState({ d: y });
          // console.log(x, "999");
          // this.setState({ data: data2, totalPage: 100 });
        }}
      />
    );
  }
}
export default Demo4;
