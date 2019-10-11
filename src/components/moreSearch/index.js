import React from "react";
import { Col, Label, FormControl, Form, Button, Drawer } from "tinper-bee";

import "./index.less";
const FormItem = Form.FormItem;

const SeachFormItem = props => (
  <FormItem>
    <Col md={12}>
      <Label>{props.label}</Label>
      {props.children}
    </Col>
  </FormItem>
);

const IndexView = props => {
  console.log(props.router);
  return (
    <Drawer
      className="more-search"
      title="高级搜索"
      placement="right"
      show={true}
      onClose={() => {}}
    >
      <Form>
        {props.content.map(item => (
          <SeachFormItem
            label={item.props.label}
            children={item.props.children}
          />
          // <FormItem>
          //   <Col md={12}>
          //     <Label>{item.props.label}</Label>
          //     <FormControl placeholder="请输入用户名(包含数字和字母，8-15位)" />
          //   </Col>
          // </FormItem>
        ))}
      </Form>
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
export default IndexView;
export { SeachFormItem };
