import React, { Component } from "react";
import TreeTef from "../../components/treeRef";
import TableTef from "../../components/tableRef";
import "./index.less";
import data from "./data.json";

export default class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      showModal1: false,
      treeData: data
    };
  }
  onSave = result => {
    this.setState({
      showModal1: false,
      matchData: result //保存选中的数据
    });
  };
  onCancel = () => {
    this.setState({ showModal1: false });
  };

  render() {
    let { showModal1, matchData, treeData } = this.state;

    return (
      <div className="demoPadding">
        <h4>树参照</h4>
        <TreeTef
          showModal={showModal1}
          treeData={treeData}
          matchData={matchData}
          onSave={r => this.onSave(r)}
          onCancel={() =>
            this.setState({
              showModal1: false
            })
          }
        />
        <div
          className="red-button"
          onClick={() => {
            this.setState({ showModal1: true });
          }}
        >
          打开树参照
        </div>
        <h4>表参照</h4>
        <TableTef
          showModal={showModal1}
          treeData={treeData}
          matchData={matchData}
          onSave={r => this.onSave(r)}
          onCancel={() =>
            this.setState({
              showModal1: false
            })
          }
        />
        <div
          className="red-button"
          onClick={() => {
            this.setState({ showModal1: true });
          }}
        >
          打开表参照
        </div>
      </div>
    );
  }
}
