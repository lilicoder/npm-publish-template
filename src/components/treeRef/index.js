import React, { Component } from "react";
import RefTreeBaseUI from "ref-tree";
import "ref-tree/lib/index.css";
import "./index.less";
class ref extends Component {
  render() {
    let { props } = this;
    let { treeData, title, showModal, matchData } = props;
    let childrenOptions = {
      treeData,
      title,
      showModal,
      onSave: props.onSave,
      onCancel: props.onCancel,
      matchData
    };
    return <RefTreeBaseUI {...childrenOptions} className="iot-tree-ref" />;
  }
}
export default ref;
