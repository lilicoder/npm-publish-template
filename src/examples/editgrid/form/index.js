
import React, {Component} from "react";
import {Table, Form, Button, FormControl, Select} from 'tinper-bee';
import InputNumber from 'bee-input-number';
class TestForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // 正在编辑行号
            editingRow: 0,
            // 编辑状态
            editable: false
        }
    }
    edit = (index) => () => {
        let {form} = this.props;
        form.resetFields();
        this.setState({editingRow: index, editable: true})
    };
    cancel = () => {
        this.initEditState()
    };
    confirm = () => {
        let {form} = this.props;
        form.validateFields((error, values) => {
            console.log(values, 999999999)
        })
    };
    initEditState = () => {
        let {form} = this.props;
        // 重置表单，如果存在默认值，则恢复到默认值状态。
        form.resetFields();
        this.setState({editingRow: 0, editable: false})
    };
    render() {
        let {editingRow} = this.state;
        const {form: {getFieldError, getFieldProps, getFieldValue}} = this.props;
        const columns = [
            {
                title: "员工编号", dataIndex: "a", key: "a", width: 350,
                render: (value, record, index) => {
                    if (index === editingRow) {
                        return (
                            <div>
                                <InputNumber
                                    {
                                        ...getFieldProps(
                                            'a',
                                            {
                                                initialValue: value,
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: `员工编号不能为空`
                                                    }
                                                ]
                                            })
                                    }
                                />
                                {getFieldError('a')}
                            </div>
                        )
                    } else {
                        return value
                    }
                }
            },
            {
                title: "员工姓名", dataIndex: "b", key: "b", width: 200,
                render: (value, record, index) => {
                    if (index === editingRow) {
                        return (
                            <FormControl {...getFieldProps('b', {initialValue: value})}/>
                        )
                    } else {
                        return value
                    }
                }
            },
            {
                title: "性别", dataIndex: "c", key: "c", width: 200,
                render: (value, record, index) => {
                    if (index === editingRow) {
                        return (
                            <Select data={sexData} {...getFieldProps('c', {initialValue: value})}/>
                        )
                    } else {
                        let s = sexData.find(sex => sex.value === value)
                        return s ? s.key: value
                    }
                }
            },
            {
                title: "性别联动", key: "c_combine", width: 200,
                render: (value, record, index) => {
                    // 如果
                    let fieldValue = getFieldValue('c');
                    if (!fieldValue && record.c) {
                        fieldValue = record.c;
                    }
                    if (index === editingRow) {
                        // 通过设置key值来刷新select组件
                        return (
                            <Select key={new Date()} data={sexData} disabled={true} {...getFieldProps('c_combine', {initialValue: fieldValue})}/>
                        )
                    } else {
                        return (
                            <Select data={sexData} disabled={true} defaultValue={fieldValue}/>
                        )
                    }
                }
            },
            {
                title: "操作", width: 200,
                render: (value, record, index) => {
                    let { editable, editingRow } = this.state;
                    if (index === 0) {
                        return (
                            <Button colors="primary" disabled={editable} onClick={this.confirm}>确定</Button>
                        )
                    } else {
                        if (editable && index === editingRow) {
                            return (
                                <div>
                                    <Button colors="primary" style={{marginRight: '10px'}} onClick={this.confirm}>确定</Button>
                                    <Button colors="primary" onClick={this.cancel}>取消</Button>
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <Button colors="primary" disabled={editable} style={{marginRight: '10px'}} onClick={ this.edit(index) } >编辑</Button>
                                    <Button colors="primary" disabled={editable} onClick={this.cancel}>取消</Button>
                                </div>
                            )
                        }
                    }
                }
            }

        ];
        const sexData = [
            {key: '男', value: 'female'},
            {key: '女', value: 'male'}
        ];
        const data = [
            {a: undefined, b: undefined, c: undefined, key: "-1"},
            {a: "201903280005", b: "小张", c: "female", key: "1001"},
            {a: "201903200004", b: "小明", c: "female", key: "1002"},
            {a: "201903120001", b: "小红", c: "male", key: "1003"},
            {a: "201903120002", b: "小姚", c: "male", key: "1004"},
            {a: "201903120003", b: "小岳", c: "female", key: "1005"},
            {a: "201903120004", b: "小王", c: "female", key: "1006"},
            {a: "201903120005", b: "小绍", c: "female", key: "1007"},
            {a: "201903120006", b: "小郭", c: "female", key: "1008"},
            {a: "201903120007", b: "小杨", c: "male", key: "1009"}
        ];
        return (
            <Table
                columns={columns}
                data={data}
                syncHover={false}
            />
        );
    }
}

export default Form.createForm()(TestForm);
