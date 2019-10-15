import React from "react";
import { Col, Label, Form, Drawer } from "tinper-bee";

import "./index.less";

const SearchFormItem = props => (
  <div className="search-form-item">
    <Col md={12}>
      <Label>{props.label}</Label>
      {props.children}
    </Col>
  </div>
);
const IndexView = props => {
  return (
    <Drawer
      className="more-search"
      title="高级搜索"
      placement="right"
      show={props.show}
      onClose={() => props.onClose()}
      zIndex={3}
    >
      <div className="more-search-content">
        {props.content.map(item => (
          <SearchFormItem
            label={item.props.label}
            children={item.props.children}
          />
        ))}
      </div>
      <div className="button-footer">
        <button type="button" className="red-button" onClick={props.confirmFn}>
          确定
        </button>
        <button
          type="button"
          className="gray-button ml-8  mr-8"
          onClick={props.resetFn}
        >
          重置
        </button>
        <button
          type="button"
          className="border-button"
          onClick={e => {
            props.cancelFn();
          }}
        >
          取消
        </button>
      </div>
    </Drawer>
  );
};
IndexView.defaultProps = {
  content: [],
  confirmFn: () => {},
  resetFn: () => {},
  cancelFn: () => {}
};
IndexView.SearchFormItem = SearchFormItem;
export default IndexView;
