import React, { Component } from "react";
import { AcGrid as Grid, Select, CommonStyle } from "../../common";
import "../../common/components/common.less";
const column = [
  {
    title: "序号",
    dataIndex: "sqeNum",
    key: "sqeNum",
    width: 45,
    fixed: "left",
    render: (text, record, index) => index + 1,
  },
  {
    title: "序号",
    dataIndex: "sqeNum",
    key: "sqeNum",
    width: 45,
    fixed: "left",
    render: (text, record, index) => index + 1,
  },
  {
    title: "序号",
    dataIndex: "sqeNum",
    key: "sqeNum",
    width: 45,
    fixed: "left",
    render: (text, record, index) => index + 1,
  },
  {
    required: true,
    title: "订单编号",
    dataIndex: "orderCode",
    key: "orderCode",
    width: 150,
    textAlign: "center",
  },
  {
    title: "金额",
    dataIndex: "money",
    key: "money",
    width: 160,
    textAlign: "right",
  },
  {
    required: true,
    title: "类型",
    dataIndex: "type_name",
    key: "type_name",
    width: 100,
  },
  {
    required: true,
    title: "采购组织",
    dataIndex: "purchasing",
    key: "purchasing",
    width: 150,
  },
  {
    title: "采购组",
    dataIndex: "purchasingGroup",
    key: "purchasingGroup",
    width: 300,
  },
  {
    title: "凭证日期",
    dataIndex: "voucherDate",
    key: "voucherDate",
    width: 150,
    style: CommonStyle.tableCellDisable,
  },
  {
    title: "审批状态",
    dataIndex: "approvalState_name",
    key: "approvalState_name",
    width: 150,
  },
  {
    title: "确认状态",
    dataIndex: "confirmState_name",
    key: "confirmState_name",
    width: 500,
  },
  {
    title: "关闭状态",
    dataIndex: "closeState_name",
    key: "closeState_name",
    width: 150,
  },
];
const dataList = [
  {
    orderCode: "2343",
    supplierName: "xxx",
    type_name: <Select size="sm" />,
    purchasing: "内行",
    purchasingGroup: "323",
    voucherDate: "kkkk",
    approvalState_name: "vvvv",
    confirmState_name: "aaaa",
    closeState_name: "vnnnnn",
    money: "1232.56",
    d: "操作",
    key: "1",
    _disabled: true,
    className: "disabled",
    fixed: "left",
    // style: CommonStyle.trDisable,
  },
  {
    // _checked: true,
    orderCode: "222",
    supplierName: "22xxx",
    type_name: "1223",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money: "2341232.56",
    d: "2操作",
    key: "2",
  },
  {
    orderCode: "222",
    supplierName: "22xxx",
    _disabled: true,
    type_name: "1223",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money: "122368732.56",
    d: "3操作",
    key: "3",
  },
  {
    orderCode: "222",
    supplierName: "22xxx",
    type_name: "1223",
    purchasing: "内行2",
    purchasingGroup: "3223",
    voucherDate: "222kk",
    approvalState_name: "22vvvv",
    confirmState_name: "2aaaa",
    closeState_name: "2vnnnnn",
    money: "18765232.56",
    d: "4操作",
    key: "4",
  },
];

class Demo4 extends Component {
  constructor() {
    super();
    this.state = { totalPage: 200 };
  }
  componentDidMount() {
    // setTimeout(() => {
    // this.setState({ totalPage: 88 });
    // }, 1500);
  }
  render() {
    return (
      <Grid
        // showIndex={true}
        columns={column}
        data={dataList.concat(dataList).concat(dataList).concat(dataList)}
        // data={dataList}
        totalPage={this.state.totalPage}
        onRowClick={(a, i) => alert(i)}
        // onRowHover={(a, i) => console.log(a, i, "KKKKK")}
        freshData={(x) => {
          console.log(1111);
          // this.setState({ data: data2 });
        }}
        emptyText={() => "No data"}
        rowKey="key"
        onDataNumSelect={(x, y) => {
          console.log(x, y, "999");
          // this.setState({ data: data2, totalPage: 100 });
        }}
        multiSelect={true}
        hidePagination={this.props.hidePagination}
        loading={this.props.loading}
        onRowDoubleClick={(item) => console.log(item)}
        isSingle={this.props.isSingle}
      />
    );
  }
}
export default Demo4;
