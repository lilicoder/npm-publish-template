import React, { Component } from "react";
import { AcSeachPanel } from "../../common";
import Form from "bee-form";
import { Label, Checkbox, Radio, Select, Col, Row } from "tinper-bee";
import moment from "moment/moment";
const FormItem = Form.FormItem;
const Option = Select.Option;
const CheckboxGroup = Checkbox.CheckboxGroup;
class Demo4 extends Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      approvalState: "1",
      purchasingGroup: "2",
      closeState: "",
      confirmState: "",
      voucherDate: [moment(), moment("2019-07-20")],
      orderTypes: [
        {
          code: "001",
          name: "类型1"
        },
        {
          code: "002",
          name: "类型2"
        },
        {
          code: "003",
          name: "类型3"
        }
      ]
    };
  }

  render() {
    const { getFieldProps } = this.props.form;
    let self = this;
    return (
      <AcSeachPanel>
        <Form>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
              <FormItem>
                <Label>订单类型</Label>
                <Select
                  size="sm"
                  {...getFieldProps("type", {
                    initialValue: ""
                  })}
                >
                  <Option value="">请选择</Option>
                  {self.state.orderTypes.map((item, index) => {
                    return (
                      <Option key={index} value={item.code}>
                        {item.name}
                      </Option>
                    );
                  })}
                </Select>
              </FormItem>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <FormItem>
                <Label>采购组</Label>
                <CheckboxGroup
                  {...getFieldProps("purchasingGroup", {
                    initialValue: ["2"]
                  })}
                >
                  <Checkbox value="1">人力</Checkbox>
                  <Checkbox value="2">财务</Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <FormItem>
                {/* <Col xs={12} sm={12} md={12}  lg={12} className="col"> */}
                <Label>审批</Label>
                <Radio.RadioGroup
                  selectedValue={this.state.approvalState}
                  {...getFieldProps("approvalState", {
                    initialValue: "1",
                    onChange(value) {
                      self.setState({ approvalState: value });
                    }
                  })}
                >
                  <Radio value="0">未审批</Radio>
                  <Radio value="1">已审批</Radio>
                </Radio.RadioGroup>
                {/* </Col> */}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </AcSeachPanel>
    );
  }
}
export default Form.createForm()(Demo4);
