import React, { Component } from "react";
import FormLayout from "ac-form-layout";
import "ac-form-layout/build/FormLayout.css";

class AcMoreSearchContainer extends Component {
  render() {
    return (
      <div style={{ background: "#f6f6f6", padding: "15px 0" }}>
        <FormLayout>{this.props.children}</FormLayout>
      </div>
    );
  }
}
export default AcMoreSearchContainer;
