import React, { Component } from "react";

import { StepLayout, AcTitleBar, OprationBar, Step, Tabs } from "../../common";

import { Button, ButtonGroup } from "tinper-bee";
import Btns from "ac-btns";
import "ac-btns/build/Btns.css";

import AcGrid from "../ac-grid";

class Demo extends Component {
  render() {
    let header = [
      <AcTitleBar
        title="智能配料解决方案"
        onSearch={(x) => console.log(x)}
        onChange={(y) => console.log(y)}
      />,
      <Step
        steps={[
          { title: "已完成" },
          { title: "已完成" },
          { title: "已完成" },
          { title: "已完成" },
          { title: "已完成" },
        ]}
        current={2}
      />,
    ];

    let mainGrid = [
      <Tabs
        defaultActiveKey="1"
        content={[
          <div name="工艺">工艺</div>,
          <div name="工艺规划">表格one</div>,
          <AcGrid name="表格two" hidePagination={true} />,
        ]}
        rightButton={[
          <ButtonGroup>
            <Btns
              btns={{
                detail: {
                  onClick: () => {
                    console.log("add");
                  },
                },
                cancel: {
                  onClick: () => {
                    console.log("add");
                  },
                },
              }}
            />
          </ButtonGroup>,
          <Btns
            btns={{
              max: {
                onClick: () => {
                  console.log("max");
                },
              },
            }}
          />,
        ]}
      />,
    ];

    let footer = (
      <OprationBar leftBtn={[<Button bordered>上一步</Button>]}>
        <Button colors="primary" disabled>
          下一步
        </Button>
        <Button bordered>取消</Button>
      </OprationBar>
    );
    return <StepLayout header={header} content={mainGrid} footer={footer} />;
  }
}
export default Demo;
