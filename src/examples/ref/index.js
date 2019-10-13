import React, { Component } from "react";
import TreeTef from "../../components/treeRef";
import TableTef from "../../components/tableRef";
import "./index.less";
import TreeTableRef from "../../components/treeTableRef";
import OrganRef from "../../business-components/organRef";
import DepartRef from "../../business-components/departRef";

export default class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.tableTefDom = React.createRef();
    this.state = {
      showModal1: false
    };
  }
  onSave = result => {
    console.log(result);
  };

  render() {
    return (
      <div className="demoPadding">
        <h4>树参照</h4>
        <TreeTef
          onSave={r => this.onSave(r)}
          placeholder="树参照"
          title="树参照选择"
          fetchDataUrl="https://mock.yonyoucloud.com/mock/1264/pap_basedoc/common-ref/blobRefTree"
        />
        <h4>表参照</h4>
        <TableTef
          filterUrl="www.yonyou.com/"
          fetchDataUrl="https://mock.yonyoucloud.com/mock/1264/pap_basedoc/common-ref/blobRefTreeGrid"
          fetchHeadUrl="https://mock.yonyoucloud.com/mock/1264/pap_basedoc/common-ref/refInfo"
          onSave={r => this.onSave(r)}
          ref={this.tableTefDom}
          placeholder="表参照"
          style={{ width: 200 }}
        />
        <div>
          <button
            className="red-button"
            onClick={() => {
              this.tableTefDom.current.clearFunc();
            }}
          >
            清空
          </button>
        </div>
        <h4>树表参照</h4>
        <TreeTableRef
          onSave={r => this.onSave(r)}
          placeholder="树参照"
          title="树参照选择"
        />
        <h4>组织参照</h4>
        <OrganRef onSave={r => this.onSave(r)} />
        <h4>部门参照</h4>
        <DepartRef onSave={r => this.onSave(r)} />
      </div>
    );
  }
}
