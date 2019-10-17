import React, { Component } from "react";
import { MainGrid as Grid, Select } from "../../common";
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
    className: "rowClassName"
  },
  {
    title: "用户名",
    dataIndex: "a",
    key: "a",
    width: 580,
    className: "rowClassName"
  },
  { id: "123", title: "性别", dataIndex: "b", key: "b", width: 80 },
  { title: "年龄", dataIndex: "c", key: "c", width: 600 }
  // {
  //   title: "操作",
  //   key: "d",
  //   width: 200,
  //   className: "opration",
  //   render: (text, record, index) => (
  //     <div>
  //       <button>编辑</button>
  //       <button>删除</button>
  //     </div>
  //   )
  // }
];

const data = [...new Array(100)].map((e, i) => {
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
        freshData={x => {
          console.log(1111);
          this.setState({ data: data2 });
        }}
        onDataNumSelect={x => {
          console.log(x, "999");
        }}
        // hidePagination={true}
        // opration={true}
        // multiSelect={{ type: "radio" }}
        // getSelectedDataFunc={record => console.log(record, "Llll")}
      />
    );
  }
}
export default Demo4;
