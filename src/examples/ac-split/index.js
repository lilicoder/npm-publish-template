import React, { Component } from "react";

import { AcSplitLayout, AcTitleBar, AcSeachPanel } from "../../common";

import { ButtonGroup, Button, Icon } from "tinper-bee";
import Btns from "ac-btns";

import SearchCon from "../ac-seach";
import AcGrid from "../ac-grid";
class Demo extends Component {
  render() {
    let header = (
      <AcTitleBar title="劣化分析">
        <ButtonGroup>
          <Btns
            btns={{
              add: {
                onClick: () => {
                  console.log("add");
                }
              },
              delete: {
                // name: "新增保存",
                onClick: () => {
                  console.log("delete");
                }
              }
            }}
          />
        </ButtonGroup>
        <Btns
          btns={{
            cancel: {
              onClick: () => {
                console.log("cancel");
              }
            }
          }}
        />
        <Button shape="icon" bordered>
          <Icon type="uf-sync-c-o" />
        </Button>
      </AcTitleBar>
    );

    let search = <SearchCon />;

    let mainGrid = <AcGrid />;
    let kidGrid = <AcGrid hidePagination={true} />;
    return (
      <AcSplitLayout
        header={header}
        search={search}
        mainGrid={mainGrid}
        kidGrid={kidGrid}
      />
    );
  }
}
export default Demo;
