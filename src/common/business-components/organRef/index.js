import React from "react";
import TreeRef from "../../components/treeRef";

export default props => {
  return (
    <TreeRef
      onSave={r => props.onSave(r)}
      placeholder="组织"
      title="组织选择"
      fetchDataUrl={
        props.fetchDataUrl ||
        "https://mock.yonyoucloud.com/mock/1264/pap_basedoc/common-ref/blobRefTree"
      }
    />
  );
};
