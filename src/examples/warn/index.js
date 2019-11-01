import React, { Component } from "react";

import {
  BasicLayout as Layout,
  SearchContainer,
  Warn,
  MoreSearch,
  Pagination,
  SearchInput,
  OrganRef
} from "../../common";
import "./index.less";

const SeachFormItem = MoreSearch.SeachFormItem;

class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Array(10)
        .fill({
          id: "62f32a2cdc254b89904b0f0aa4f2e561",
          tag: "测试7",
          actValue: "578.0000",
          unit: "千帕Kpv",
          createTime: "2019-09-29 14:22:46",
          alarmColor: "Red",
          isAlarm: 1,
          isConfirm: 0,
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
            tag: "站点1.1号亨龙储能焊机.修磨后实际焊点数",
            actValue: "5.0000",
            unit: "Kv",
            createTime: "2019-09-29 14:22:46",
            alarmColor: "Orange",
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
            tag: "测试7",
            actValue: "5.0000",
            unit: "Kv",
            createTime: "2019-09-29 14:22:46",
            alarmColor: "Yellow",
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
          <SearchInput
            placeHolder="请输入搜索内容"
            onSearch={() => console.log(123)}
          />,
          <div>
            <button
              className="gray-button"
              onClick={() => {
                this.setState({ showSearchBoard: true });
              }}
            >
              高级搜索
            </button>
          </div>
        ]}
      />
    );
    let content = [
      <Warn data={this.state.data} />,
      <MoreSearch
        show={this.state.showSearchBoard}
        onClose={() =>
          this.setState({
            showSearchBoard: false
          })
        }
        content={[
          <SeachFormItem label="用户名">
            <OrganRef />
          </SeachFormItem>,
          <SeachFormItem label="密码">
            <OrganRef />
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
        totalPage={99} //总页数
      />
    );

    return <Layout header={header} content={content} footer={footer} />;
  }
}

export default IndexView;
