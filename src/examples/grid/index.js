import React, { Component } from "react";
import { Button } from "tinper-bee";
import Grid from "../../components/grid";
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
  { id: "123", title: "性别", dataIndex: "b", key: "b", width: 80 },
  { title: "年龄", dataIndex: "c", key: "c", width: 200 }
];

const data = [...new Array(100)].map((e, i) => {
  const rs = { a: i + "a", b: i + "b", c: i + "c", d: i + "d", key: i };
  if (i % 3 == 0) {
    rs.b = "女";
  }
  return rs;
});

class Demo4 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid
        columns={columns}
        data={data}
        totalPage={50}
        freshData={x => console.log(x)}
        // onDataNumSelect={x => console.log(x, "999")}
        // multiSelect={{ type: "radio" }}
        // getSelectedDataFunc={record => console.log(record, "Llll")}
      />
    );
  }
}
export default Demo4;
