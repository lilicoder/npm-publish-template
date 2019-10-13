import React, { Component } from "react";
import { RefMultipleTableWithInput } from "ref-multiple-table";
import Radio from "bee-radio";
import "bee-radio/build/Radio.css";
import request from "./../utils/request";
import "ref-multiple-table/lib/index.css";
import "./index.less";
let options = {};
class TableRef extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoading: false,
      showModal: false,
      matchData: [],
      value: ""
    };
    this.page = {
      pageCount: 0,
      pageSize: 10,
      currPageIndex: 1
    };
    this.tableData = [];
    this.columnsData = [];
  }

  componentDidMount() {
    this.loadData();
  }

  async filterData(params) {
    let result = await request(this.props.filterUrl + "?params=" + params);
    this.launchTableData(result.data);
  }
  loadData = async () => {
    let refModelUrl = {
      tableBodyUrl: this.props.fetchDataUrl, //表体请求
      refInfo: this.props.fetchHeadUrl //表头请求
    };
    let requestList = [
      request(refModelUrl.refInfo, { method: "get" }), //表头数据
      request(refModelUrl.tableBodyUrl, { method: "get" }) //表体数据
    ];
    Promise.all(requestList)
      .then(([columnsData, bodyData]) => {
        this.launchTableHeader(columnsData.data);
        this.launchTableData(bodyData.data);
        this.setState({
          showLoading: false
        });
      })
      .catch(e => {
        this.launchTableHeader({});
        this.launchTableData({});
        this.setState({
          showLoading: false
        });
        console.log(e);
      });
  };
  /**
   * 根据 refinfo 返回结果拆解并渲染表格表头
   * @param {object} data
   * 注意：单选时候自己添加radio
   */
  launchTableHeader = data => {
    if (!data) return;
    let { multiple, valueField } = options;
    let keyList = data.strFieldCode || [];
    let titleList = data.strFieldName || [];
    let colunmsList = keyList.map((item, index) => {
      return {
        key: item,
        dataIndex: item,
        title: titleList[index]
      };
    });
    if (colunmsList.length === 0) {
      colunmsList = [
        { title: "未传递表头数据", dataIndex: "nodata", key: "nodata" }
      ];
    } else if (!multiple) {
      colunmsList.unshift({
        title: " ",
        dataIndex: "a",
        key: "a",
        width: 45,
        render(text, record, index) {
          return (
            <Radio.RadioGroup
              name={record[valueField]}
              selectedValue={record._checked ? record[valueField] : null}
            >
              <Radio value={record[valueField]}></Radio>
            </Radio.RadioGroup>
          );
        }
      });
    }
    this.columnsData = colunmsList;
  };
  /**
   * 处理并渲染表格数据
   */
  launchTableData = response => {
    if (!response) return;
    let { valueField } = options;
    let { data = [], page = {} } = response;
    data.map((record, k) => {
      record.key = record[valueField];
      return record;
    });
    this.tableData = data;
    this.page = {
      pageCount: page.pageCount || 0,
      currPageIndex: page.currPageIndex + 1 || 0,
      totalElements: page.totalElements || 0
    };
  };

  miniSearchFunc = value => {
    this.filterData(value);
  };

  handlePagination = index => {
    this.page.currPageIndex = index;
    this.setState({ number: Math.random() });
  };

  dataNumSelect = (index, pageSize) => {
    console.log(index, pageSize);
  };

  onSave = item => {
    this.setState({
      showModal: false
    });
    this.props.onSave(item);
  };

  onCancel = () => {
    this.setState({ showModal: false });
  };
  clearFunc = () => {
    this.setState({
      matchData: [],
      value: `{"refname":"","refpk":"${Math.random()}"}`
    });
  };
  render() {
    let { showLoading, matchData, value, showModal } = this.state;
    let { columnsData, tableData, page } = this;
    let { placeholder, title } = this.props;
    options = {
      miniSearch: true,
      multiple: false,
      valueField: "refpk",
      displayField: "{refname}"
    };
    let childrenProps = {
      showModal: showModal,
      showLoading: showLoading,
      columnsData: columnsData,
      tableData: tableData,
      title: title,
      // ...page,
      matchData,
      value,
      miniSearchFunc: this.miniSearchFunc,
      dataNumSelect: this.dataNumSelect,
      handlePagination: this.handlePagination,
      onSave: this.onSave,
      onCancel: this.onCancel,
      className: "iot-table-ref",
      wrapClassName: "iot-table-ref-input",
      placeholder: placeholder,
      style: { width: "100%" }
    };
    return (
      <div
        style={this.props.style}
        className={"iot-table-ref " + this.props.className}
      >
        <RefMultipleTableWithInput {...childrenProps} />
      </div>
    );
  }
}
export default TableRef;
