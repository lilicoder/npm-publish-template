import React, { Component } from "react";

import {
  StepLayout,
  AcTitleBar,
  OprationBar,
  Step,
  AcTitle
} from "../../common";

import { Button, FormControl, Form, Label, ButtonGroup } from "tinper-bee";
import { RefTreeWithInput } from "ref-tree";
import Btns from "ac-btns";
import DatePicker from "bee-datepicker";
import "ac-btns/build/Btns.css";

// import AcGrid from "../ac-grid";
const FormItem = Form.FormItem;

let Demo = Form.createForm()(
  class Demo extends Component {
    render() {
      const { getFieldProps } = this.props.form;
      let header = [
        <AcTitleBar
          title="智能配料解决方案"
          onSearch={x => console.log(x)}
          onChange={y => console.log(y)}
        />,
        <Step
          steps={[
            { title: "已完成" },
            { title: "已完成" },
            { title: "已完成" },
            { title: "已完成" },
            { title: "已完成" }
          ]}
          current={2}
        />
      ];

      let inputContent = [
        <AcTitle>
          <ButtonGroup>
            <Btns
              btns={{
                detail: {
                  onClick: () => {
                    console.log("add");
                  }
                },
                cancel: {
                  onClick: () => {
                    console.log("add");
                  }
                }
              }}
            />
          </ButtonGroup>
          <Btns
            btns={{
              max: {
                onClick: () => {
                  console.log("add");
                }
              }
            }}
          />
        </AcTitle>,
        <div className="iot-input-container">
          <Form className="demo4">
            <FormItem>
              <Label>组织</Label>
              <RefTreeWithInput
                // style={{ width: 300 }}
                emptyBut={true}
                nodeDisplay={record => {
                  return record.refname;
                }}
                displayField={record => {
                  return record.name;
                }} //显示内容的键
                valueField={"code"} //真实 value 的键
                filterUrl={
                  "https://mock.yonyoucloud.com/mock/1264/pap_basedoc/common-ref/blobRefTree"
                }
                searchValue={"org1"}
                onSave={this.onSave}
                // matchData={matchData}
                // treeData={treeData}
                canClickGoOn={this.canClickGoOn}
                selectorDisplay={"{refname}-{code}"}
                {...getFieldProps("code1", {
                  initialValue: "",
                  rules: [
                    {
                      message: "请输入请选择",
                      pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                    }
                  ]
                })}
              ></RefTreeWithInput>
            </FormItem>
            <FormItem className="time flex">
              <Label className="line-height-32">需求日期</Label>
              <DatePicker
                {...getFieldProps("time", {})}
                placeholder={"请选择需求日期"}
              />
            </FormItem>
            <FormItem className="time flex">
              <Label className="line-height-32">需求日期</Label>
              <DatePicker
                {...getFieldProps("time", {})}
                placeholder={"请选择需求日期"}
              />
            </FormItem>
            <FormItem className="demo1">
              <Label>姓名</Label>
              <FormControl placeholder="请输入姓名" />
            </FormItem>
          </Form>
        </div>
      ];

      let footer = (
        <OprationBar leftBtn={[<Button bordered>上一步</Button>]}>
          <Button colors="primary" disabled>
            下一步
          </Button>
          <Button bordered>取消</Button>
        </OprationBar>
      );
      return (
        <StepLayout header={header} content={inputContent} footer={footer} />
      );
    }
  }
);
export default Demo;
