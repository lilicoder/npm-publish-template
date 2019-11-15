/**
 *
 * @title 基础示例
 * @description 基础示例
 *
 */
import React from "react";
import SearchPanel from "ac-search-panel";
import "./index.less";

const AdvancedContainer = SearchPanel.AdvancedContainer;

let Demo = props => {
  return (
    <SearchPanel
      title="高级搜索"
      showOperation={false}
      defaultExpanded={true}
      className="iot-ac-search"
    >
      <AdvancedContainer>
        <div className="ac-search-content">{props.children}</div>
      </AdvancedContainer>
    </SearchPanel>
  );
};

export default Demo;
