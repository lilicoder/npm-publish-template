import React, {Component} from "react";
import {FormControl, Icon, Tooltip, Form} from "tinper-bee";
import {formFieldHasError, getFieldHasErrorTip} from "../../../utils";

class StringEditGridCell extends Component {
    constructor(props) {
        super(props);
        const {grabThis} = props;
        grabThis && grabThis(this);
    }

    /**
     * 重置属性
     */
    resetValue = () => {
        const {form} = this.props;
        form.resetFields();
    };

    /**
     * 设置数值
     */
    setValue = (value) => {
        const {form, colCode} = this.props;
        if (colCode) {
            form.setFieldsValue({[colCode]: value})
        } else {
            if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
                console.error(`StringEditGridCell->colCode属性 在设置数值时不能为空，colCode=${colCode}`)
            }
        }
    };

    /**
     * 校验
     */
    validValue = () => {
        const {form} = this.props;
        return form.validateFields();
    };

    render() {
        const {
            hidden, disabled, required, colName, colCode, componentClass,
            initialValue, form: {getFieldDecorator, getFieldsError}
        } = this.props;
        let {valueRules = []} = this.props;
        // 如果是隐藏状态返回原始数值
        if (hidden) {
            let v = initialValue || "";
            return (<span title={v}>{v}</span>);
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
                message: `${colName}不能为空`
            })
        }
        return (
            <div className="editable-cell">
                <div className={cls}>
                    {
                        getFieldDecorator(colCode, {
                            initialValue: initialValue,
                            rules: valueRules
                        })(
                            <FormControl
                                {...opt}
                                componentClass={componentClass ? componentClass : "input"}
                            />
                        )
                    }
                    <span className="error">
                        {formFieldHasError(getFieldsError(), colCode) ?
                            <Tooltip inverse className="u-editable-table-tp" placement="bottom"
                                     overlay={getFieldHasErrorTip(getFieldsError()[colCode])}>
                                <Icon className="uf-exc-t required-icon"/>
                            </Tooltip>
                            : null}
                    </span>
                </div>
            </div>
        );
    }
}

export default Form.createForm()(StringEditGridCell);