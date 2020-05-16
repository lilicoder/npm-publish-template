import React, { Component } from "react";
import { AcSeachPanel, Input, Select } from "../../common";
import Form from "bee-form";
import { Col, Row } from "tinper-bee";
import moment from "moment/moment";
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
          name: "类型1",
        },
        {
          code: "002",
          name: "类型2",
        },
        {
          code: "003",
          name: "类型3",
        },
      ],
    };
  }

  render() {
    return (
      <AcSeachPanel
        onPanelChangeEnd={(status) => {
          console.log(status, "*****");
        }}
      >
        <Form>
          <Row>
            <Col xs={12} sm={6} md={4} lg={3}>
              <Input disabled />
            </Col>

            <Col xs={12} sm={6} md={4} lg={3}>
              <Select />
            </Col>
          </Row>
        </Form>
      </AcSeachPanel>
    );
  }
}
export default Form.createForm()(Demo4);
