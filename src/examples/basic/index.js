import React, { Component } from "react";
import { Form } from "tinper-bee";

import {
  BasicLayout as Layout,
  Card,
  SearchContainer,
  TreeRef,
  Select,
  Pagination,
  SearchInput
} from "./../../common";

import Grid from "../grid";

import "./index.less";

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
            <SearchInput
              placeHolder="请输入搜索内容"
              type="search"
              onSearch={() => console.log(123)}
              splitLine={true}
            />,
            <TreeRef label="组织" />,
            // <ColorSelect {...getFieldProps("xxx")} />,
            <Select
              // onChange={this.handleChange}
              data={[
                {
                  value: "请选择",
                  code: ""
                },
                {
                  value: "选项1",
                  code: "x1"
                }
              ]}
              {...getFieldProps("username")}
            />,
            <div right>
              <button
                className="red-button mr-10"
                onClick={() => {
                  this.props.form.validateFields((err, values) => {
                    console.log(values, ":KKKK");
                  });
                }}
              >
                查询
              </button>
              <button className="border-button">清空查询</button>
            </div>
          ]}
        />
      );
      // let content = <Card data={this.state.data} />;
      let content = [<Grid full={true} />];

      return <Layout header={header} content={content} />;
    }
  }
);

export default Demo;
