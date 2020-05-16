import React, { Component } from "react";

import { AcSingleLayout, AcTitleBar, AcPagination } from "../../common";

import { ButtonGroup } from "tinper-bee";
import Btns from "ac-btns";

import SearchCon from "../ac-seach";
import AcGrid from "../ac-grid";
class Demo extends Component {
  render() {
    let header = (
      <AcTitleBar
        title="劣化分析"
        showSearch={true}
        onSearch={(x) => console.log(x)}
        onChange={(y) => console.log(y)}
        // icon={<Icon className="uf-close" />}
        handleGoBack={() => alert(1)}
      >
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
      </AcTitleBar>
    );

    let search = <SearchCon />;

    let mainGrid = (
      <AcGrid hidePagination={true} loading={false} isSingle={true} />
    );

    let footer = (
      <AcPagination
        totalPage={800}
        activePage={0}
        onDataNumSelect={(x, y) => console.log(x, y, "KKKKK")}
        selectAll={() => console.log("select")}
        showSelect={true}
      />
    );
    return (
      <AcSingleLayout
        header={header}
        headerClassName="class1"
        search={search}
        searchClassName="class2"
        grid={mainGrid}
        gridClassName="class3"
        footer={footer}
        footerClassName="class4"
      />
    );
  }
}
export default Demo;
