import React, { Component } from "react";
import { AcMoreSearchContainer } from "../../common";
import { InputNumber, FormControl, Form } from "tinper-bee";
import FormLayout from "ac-form-layout";

import DatePicker from "bee-datepicker";

const layout = {
  lg: 3,
  md: 4,
  sm: 6,
  xs: 12
};

const { FormItem, FormRow } = FormLayout;

class Demo4 extends Component {
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (
      <AcMoreSearchContainer>
        <FormRow>
          <FormItem
            label="姓名"
            required={true}
            {...layout}
            errorMsg={getFieldError("username")}
          >
            <FormControl
              placeholder="请输入姓名"
              {...getFieldProps("username", {
                validateTrigger: "onBlur",
                rules: [
                  {
                    required: true,
                    message: "请输入姓名"
                  }
                ]
              })}
            />
          </FormItem>
          <FormItem
            label="姓名"
            required={true}
            {...layout}
            errorMsg={getFieldError("username1")}
          >
            <FormControl
              placeholder="请输入用户名"
              {...getFieldProps("username1", {
                validateTrigger: "onChange",
                rules: [
                  {
                    required: true,
                    message: "请输入用户名"
                  }
                ]
              })}
            />
          </FormItem>
          <FormItem
            label="采购日期"
            required={true}
            {...layout}
            errorMsg={getFieldError("time")}
          >
            <DatePicker
              format="YYYY-MM-DD"
              {...getFieldProps("time", {
                rules: [
                  {
                    required: true,
                    message: "请选择采购日期"
                  }
                ]
              })}
              placeholder={"请选择采购日期"}
            />
          </FormItem>

          <FormItem
            label="用户名"
            required={true}
            {...layout}
            errorMsg={getFieldError("yonghuming")}
          >
            <FormControl
              placeholder="请输入用户名"
              {...getFieldProps("yonghuming", {
                validateTrigger: "onBlur",
                rules: [
                  {
                    required: true,
                    message: "请输入用户名"
                  }
                ]
              })}
            />
          </FormItem>
        </FormRow>
        <FormRow>
          <FormItem
            label="金额"
            required={true}
            {...layout}
            errorMsg={getFieldError("complex_count")}
          >
            <InputNumber
              iconStyle="one"
              precision={2}
              {...getFieldProps("complex_count", {
                initialValue: "",
                rules: [
                  {
                    required: true,
                    message: "请输入金额"
                  }
                ]
              })}
            />
          </FormItem>
          <FormItem label="姓名" {...layout}>
            <FormControl placeholder="请输入用户名" />
          </FormItem>
        </FormRow>
        <FormRow>
          <FormItem label="姓名" required={true} {...layout}>
            <FormControl placeholder="请输入用户名" />
          </FormItem>
          <FormItem label="姓名" {...layout}>
            <FormControl placeholder="请输入用户名" />
          </FormItem>
          <FormItem label="姓名" {...layout}>
            <FormControl placeholder="请输入用户名" />
          </FormItem>
          <FormItem label="姓名" required={true} {...layout}>
            <FormControl placeholder="请输入用户名" />
          </FormItem>
        </FormRow>
      </AcMoreSearchContainer>
    );
  }
}
export default Form.createForm()(Demo4);
