import React, { Component } from "react";

import Icon from "bee-icon";
import "bee-icon/build/Icon.css";
import Tooltip from "bee-tooltip";
import "bee-tooltip/build/Tooltip.css";
import Form from "bee-form";
import "bee-form/build/Form.css";
import InputNumber from "bee-input-number";
import "bee-input-number/build/InputNumber.css";
import { formFieldHasError, getFieldHasErrorTip } from "../../../utils";

class NumberEditGridCell extends Component {
  constructor(props) {
    super(props);
    const { grabThis } = props;
    grabThis && grabThis(this);
  }

  /**
   * 重置属性
   */
  resetValue = () => {
    const { form } = this.props;
    form.resetFields();
  };

  /**
   * 设置数值
   */
  setValue = (value) => {
    const { form, colCode } = this.props;
    if (colCode) {
      form.setFieldsValue({ [colCode]: value });
    } else {
      if (
        process.env.NODE_ENV !== "production" &&
        process.env.NODE_ENV !== "test"
      ) {
        console.error(
          `StringEditGridCell->colCode属性 在设置数值时不能为空，colCode=${colCode}`
        );
      }
    }
  };

  /**
   * 校验
   */
  validValue = () => {
    const { form } = this.props;
    return form.validateFields();
  };

  render() {
    // 不使用getFieldDecorator 因为InputNumber本身包装了value属性导致一直提示warning.........
    const {
      hidden,
      disabled,
      required,
      colName,
      colCode,
      initialValue,
      form: { getFieldsError, getFieldProps },
      precision,
      onChange,
    } = this.props;
    let { valueRules = [] } = this.props;
    // 如果是隐藏状态返回原始数值
    if (hidden) {
      let v = initialValue || "";
      return <span title={v}>{v}</span>;
    }
    let cls = "editable-cell-input-wrapper";
    if (initialValue === "") cls += " verify-cell";
    let opt = {};
    if (disabled) {
      opt["disabled"] = true;
    }
    if (required) {
      valueRules.push({
        required: true,
        message: `${colName}不能为空`,
      });
    }

    return (
      <div className="editable-cell">
        <div className={cls}>
          <InputNumber
            {...opt}
            precision={!precision || precision === "" ? 0 : parseInt(precision)}
            min={0}
            iconStyle="one"
            {...getFieldProps(colCode, {
              initialValue: initialValue,
              rules: valueRules,
              onChange: (v) => {
                onChange && onChange(v);
              },
            })}
          />
          <span className="error">
            {formFieldHasError(getFieldsError(), colCode) ? (
              <Tooltip
                inverse
                className="u-editable-table-tp"
                placement="bottom"
                overlay={getFieldHasErrorTip(getFieldsError()[colCode])}
              >
                <Icon className="uf-exc-t required-icon" />
              </Tooltip>
            ) : null}
          </span>
        </div>
      </div>
    );
  }
}

export default Form.createForm()(NumberEditGridCell);
