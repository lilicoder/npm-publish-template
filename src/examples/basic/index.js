import React, { Component } from "react";
import { RefTreeWithInput } from "ref-tree";
import { Pagination, Form, Select, FormControl } from "tinper-bee";

import Layout from "../../components/basicLayout";
import Card from "../../components/card";
import SearchContainer from "../../components/searchContainer";
import "./index.less";
const Option = Select.Option;

let Demo = Form.createForm()(
  class IndexView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {
            type: "new",
            name: "模型",
            newFn: () => {
              alert("new");
            }
          }
        ].concat(
          new Array(10).fill({
            name: "某模型",
            description: "我是描述",
            editFn: item => {
              alert("edit");
            },
            deleteFn: item => {
              alert("delete");
            }
          })
        ),
        activePage: 1,
        treeData: [],
        value: JSON.stringify({
          refname: "用友集团",
          refpk: "001" //value中指定的refpk要等于valueField对应的字段
        })
      };
    }

    render() {
      const { getFieldProps } = this.props.form;
      let header = (
        <SearchContainer
          data={[
            <FormControl
              placeHolder="请输入搜索内容"
              type="search"
              onSearch={() => console.log(123)}
              splitLine={true}
            />,
            <RefTreeWithInput
              emptyBut={true}
              nodeDisplay={record => {
                return record.refname;
              }}
              displayField={record => {
                return record.name;
              }} //显示内容的键
              valueField={"code"} //真实 value 的键
              treeData={this.state.treeData}
              selectorDisplay={"{refname}-{code}"}
              {...getFieldProps("code1", {
                initialValue: this.state.value,
                rules: [
                  {
                    message: "请输入请选择",
                    pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                  }
                ]
              })}
            />,
            <Select
              defaultValue="all"
              style={{ width: 200, marginRight: 6 }}
              onChange={this.handleChange}
              showSearch={true}
              allowClear={true}
            >
              <Option value="all">全部</Option>
              <Option value="confirming">待确认</Option>
              <Option value="executing">执行中</Option>
              <Option value="completed" disabled>
                已办结
              </Option>
              <Option value="termination">终止</Option>
            </Select>,
            <div right>
              <button className="red-button mr-10">查询</button>
              <button className="border-button">清空查询</button>
            </div>
          ]}
        />
      );
      let content = <Card data={this.state.data} />;
      let footer = (
        <Pagination
          first
          last
          prev
          next
          maxButtons={5}
          boundaryLinks
          activePage={this.state.activePage}
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
);

export default Demo;
