import React from "react";
import TreeRef from "../../components/treeRef";

export default props => {
  return (
    <TreeRef
      onSave={r => props.onSave(r)}
      placeholder="部门"
      title="部门选择"
      fetchDataUrl={
        props.fetchDataUrl ||
        "https://mock.yonyoucloud.com/mock/1264/pap_basedoc/common-ref/blobRefTree"
      }
    />
  );
};
