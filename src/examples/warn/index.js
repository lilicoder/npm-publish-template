import React, { Component } from "react";
import { Pagination, FormControl } from "tinper-bee";

import Layout from "../../components/basicLayout";
import SearchContainer from "../../components/searchContainer";
import Card from "../../components/card";
import Warn from "../../components/warn";
import MoreSearch, { SeachFormItem } from "../../components/moreSearch";
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
      <MoreSearch
        content={[
          <SeachFormItem label="11111">
            <input />
          </SeachFormItem>,
          <SeachFormItem label="11111">
            <input />
          </SeachFormItem>
        ]}
        confirmFn={() => {
          console.log("confirm");
        }}
        resetFn={() => {
          console.log("reset");
        }}
        cancelFn={() => {
          console.log("cancel");
        }}
      />
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
