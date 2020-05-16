import React, { Component } from "react";

import { AcSplitLayout, AcTitleBar, AcPagination } from "../../common";

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
                },
              },
              delete: {
                // name: "新增保存",
                onClick: () => {
                  console.log("delete");
                },
              },
            }}
          />
        </ButtonGroup>
        <Btns
          btns={{
            cancel: {
              onClick: () => {
                console.log("cancel");
              },
            },
          }}
        />
        <Button shape="icon" bordered>
          <Icon type="uf-sync-c-o" />
        </Button>
      </AcTitleBar>
    );

    let search = <SearchCon />;

    let mainGrid = (
      <div>
        <AcGrid hidePagination={true} />
        <AcPagination
          totalPage={800}
          activePage={0}
          onDataNumSelect={(x, y) => console.log(x, y, "KKKKK")}
          selectAll={() => console.log("select")}
          showSelect={true}
        />
      </div>
    );
    let kidGrid = <AcGrid hidePagination={true} />;
    return (
      <AcSplitLayout
        header={header}
        headerClassName="class1"
        search={search}
        searchClassName="222"
        mainGrid={mainGrid}
        mainGridClassName="333"
        kidGrid={kidGrid}
        kidGridClassName="444"
      />
    );
  }
}
export default Demo;
