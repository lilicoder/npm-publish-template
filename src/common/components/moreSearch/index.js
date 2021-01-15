/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-11-21 11:11:28
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 13:42:29
 */
import React from "react";
import { Col } from "bee-layout";
import "bee-layout/build/Layout.css";
import Drawer from "bee-drawer";
import "bee-drawer/build/Drawer.css";
import "ac-form-layout/build/FormLayout.css";
import Label from "bee-label";

import "./index.less";

const SearchFormItem = (props) => (
  <div className="search-form-item">
    <Col md={12}>
      <Label>{props.label}</Label>
      {props.children}
    </Col>
  </div>
);
const IndexView = (props) => {
  return (
    <Drawer
      className="more-search"
      title={props.title || "高级搜索"}
      placement="right"
      show={props.show}
      onClose={() => props.onClose()}
      zIndex={3}
    >
      <div className="more-search-content">
        {props.content.map((item) => (
          <SearchFormItem
            label={item.props.label}
            children={item.props.children}
          />
        ))}
      </div>
      <div className="button-footer">
        <button type="button" className="red-button" onClick={props.confirmFn}>
          {props.confirmText || "确定"}
        </button>
        <button
          type="button"
          className="gray-button ml-8  mr-8"
          onClick={props.resetFn}
        >
          {props.resetText || "重置"}
        </button>
        <button
          type="button"
          className="border-button"
          onClick={(e) => {
            props.cancelFn();
          }}
        >
          {props.cancelText || "取消"}
        </button>
      </div>
    </Drawer>
  );
};
IndexView.defaultProps = {
  content: [],
  confirmFn: () => {},
  resetFn: () => {},
  cancelFn: () => {},
};
IndexView.SearchFormItem = SearchFormItem;
export default IndexView;
