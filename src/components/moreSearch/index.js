import React from "react";
import { Col, Label, FormControl, Form, Button, Drawer } from "tinper-bee";

import "./index.less";
const FormItem = Form.FormItem;

const IndexView = props => {
  return (
    <Drawer
      className="more-search"
      title="高级搜索"
      placement="right"
      show={true}
      onClose={() => {}}
    >
      <Form>
        <FormItem>
          <Col md={12}>
            <Label>用户名</Label>
            <FormControl placeholder="请输入用户名(包含数字和字母，8-15位)" />
          </Col>
        </FormItem>

        <FormItem>
          <Col md={12}>
            <Label>密码</Label>
            <FormControl placeholder="请输入密码" type="password" />
          </Col>
        </FormItem>
        <FormItem style={{ paddingLeft: "106px" }}>
          <Button
            shape="border"
            className="reset"
            style={{ marginRight: "8px" }}
          >
            取消
          </Button>
          <Button colors="primary" className="login">
            注册
          </Button>
        </FormItem>
      </Form>
    </Drawer>
  );
};

export default IndexView;
