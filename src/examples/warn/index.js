import React, { Component } from "react";
import { Pagination, Form, Select, FormControl, Table } from "tinper-bee";

import Layout from "../../components/basicLayout";
import SearchContainer from "../../components/searchContainer";
import Card from "../../components/card";
import Warn from "../../components/warn";
import MoreSearch from "../../components/moreSearch";
import "./index.less";

class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Array(10)
        .fill({
          id: "62f32a2cdc254b89904b0f0aa4f2e561",
          name: "测试7",
          actValue: "5.0000",
          unit: "Kv",
          createTime: "2019-09-29 14:22:46",
          alarmColor: "9",
          isAlarm: 0,
          isConfirm: 1,
          detailFn: item => {
            alert(item.id);
          },
          confirmFn: item => {
            alert(item.id);
          }
        })
        .concat(
          new Array(10).fill({
            id: "62f32a2cdc254b89904b0f0aa4f2e561",
            name: "测试7",
            actValue: "5.0000",
            unit: "Kv",
            createTime: "2019-09-29 14:22:46",
            alarmColor: "9",
            isAlarm: 0,
            isConfirm: 0,
            detailFn: item => {
              alert(item.id);
            },
            confirmFn: item => {
              alert(item.id);
            }
          })
        )
        .concat(
          new Array(10).fill({
            id: "62f32a2cdc254b89904b0f0aa4f2e561",
            name: "测试7",
            actValue: "5.0000",
            unit: "Kv",
            createTime: "2019-09-29 14:22:46",
            alarmColor: "9",
            isAlarm: 1,
            isConfirm: 0,
            detailFn: item => {
              alert(item.id);
            },
            confirmFn: item => {
              alert(item.id);
            }
          })
        )
    };
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
    let header = (
      <SearchContainer
        data={[
          <FormControl
            placeHolder="请输入搜索内容"
            type="search"
            onSearch={() => console.log(123)}
            splitLine
          />,
          <div>
            <button className="gray-button">高级搜索</button>
          </div>
        ]}
      />
    );
    let content = [
      <Card data={this.state.data} />,
      <Warn data={this.state.data} />,
      <MoreSearch />
    ];
    let footer = (
      <Pagination
        first
        last
        prev
        next
        maxButtons={5}
        boundaryLinks
        activePage={1}
        // onSelect={this.handleSelect.bind(this)}
        // onDataNumSelect={this.dataNumSelect}
        showJump={true}
        total={100}
        dataNum={2}
        // confirmBtn={this.renderConfirmBtn}
      />
    );

    return <Layout header={header} content={content} footer={footer} />;
  }
}

export default IndexView;
