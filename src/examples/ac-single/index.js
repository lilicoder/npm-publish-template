import React, { Component } from "react";

import { AcSingleLayout, AcTitleBar, AcPagination } from "../../common";

import { ButtonGroup, Icon } from "tinper-bee";
import Btns from "ac-btns";

import SearchCon from "../ac-seach";
import AcGrid from "../ac-grid";
class Demo extends Component {
  render() {
    let header = (
      <AcTitleBar
        title="劣化分析"
        showSearch={true}
        onSearch={x => console.log(x)}
        onChange={y => console.log(y)}
        // icon={<Icon className="uf-close" />}
        handleGoBack={()=>alert(1)}
      >
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
      </AcTitleBar>
    );

    let search = <SearchCon />;

    let mainGrid = <AcGrid />;

    let footer = (
      <AcPagination
        totalPage={800}
        activePage={2}
        onDataNumSelect={(x, y) => console.log(x, y, "KKKKK")}
        selectAll={() => console.log("select")}
        showSelect={true}
      />
    );
    return (
      <AcSingleLayout
        header={header}
        search={search}
        grid={mainGrid}
        footer={footer}
      />
    );
  }
}
export default Demo;
