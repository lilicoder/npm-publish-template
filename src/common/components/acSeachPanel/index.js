/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2020-12-29 14:01:09
 */
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

let Demo = (props) => {
  return (
    <SearchPanel
      title={props.title || "高级搜索"}
      showOperation={false}
      defaultExpanded={true}
      className="iot-ac-search"
      onPanelChangeEnd={(status) => {
        props.onPanelChangeEnd && props.onPanelChangeEnd(status);
      }}
    >
      <AdvancedContainer>
        <div className="ac-search-content">{props.children}</div>
      </AdvancedContainer>
    </SearchPanel>
  );
};

export default Demo;
