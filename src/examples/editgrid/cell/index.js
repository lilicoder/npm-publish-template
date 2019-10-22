
import React, {Component} from "react";
import {Table, Button} from 'tinper-bee';
import {NumberEditGridCell} from "../../../common";
import {SelectEditGridCell} from "../../../common";
import {StringEditGridCell} from "../../../common";

class TestTableEditCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // 正在编辑行号
            editingRow: 0,
            // 编辑状态
            editable: false
        }
        this.columnRefs = [];
    }
    edit = (index) => () => {
        this.setState({editingRow: index, editable: true})
    };
    cancel = () => {
        this.setState({editingRow: 0, editable: false})
    };
    confirm = () => {
        let {editingRow} = this.state;
        this.saveRow(editingRow);
    };
    /**
     * 校验并保存行号.
     * @param index
     * @returns {Promise<void>}
     */
    saveRow = async (index) => {
        const currentColumnRefs = this.columnRefs[index];
        if (currentColumnRefs) {
            let values = {};
            let errorFlag = false;
            // 获取每一个控件的对象并校验
            for (let key of Object.keys(currentColumnRefs)) {
                let ref = currentColumnRefs[key];
                if (ref.validValue) {
                    try {
                        let result = await ref.validValue();
                        values = Object.assign({}, values, result);
                    } catch (e) {
                        errorFlag = true;
                    }
                }
            }
            if (errorFlag) {
                Error("存在必输项未填，请检查！");
            } else {
                console.log(values, 9999999)
            }
        }
    };
    /**
     * 获取column对象
     * @param index 行号
     * @param name 名称
     * @returns {Function}
     */
    grabColumnRef = (index, name) => ref => {
        let old = this.columnRefs[index];
        this.columnRefs[index] = {...old, [name]: ref};
    };

    /**
     * 判断是否隐藏可编辑单元格
     * @param index
     */
    hiddenEditGridCell = index => {
        const {editingRow} = this.state;
        return index !== 0 && editingRow !== index;
    };

    /**
     * 判断是否禁用可编辑单元格
     * @param index
     * @returns {boolean}
     */
    disabledEditGridCell = index => {
        const {editingRow, editable} = this.state;
        return editable && editingRow !== index;
    };
    render() {
        const sexData = [
            {value: '男', code: 'female'},
            {value: '女', code: 'male'}
        ];
        const columns = [
            {
                title: "员工编号", dataIndex: "a", key: "a", width: 350,
                render: (value, record, index) => (
                    <NumberEditGridCell
                        colName={"员工编号"}
                        colCode={"a"}
                        hidden={this.hiddenEditGridCell(index)}
                        disabled={this.disabledEditGridCell(index)}
                        initialValue={value}
                        required
                        grabThis={this.grabColumnRef(index, "a")}
                    />
                )
            },
            {
                title: "员工姓名", dataIndex: "b", key: "b", width: 200,
                render: (value, record, index) =>(
                    <StringEditGridCell
                        colName={"员工姓名"}
                        colCode={"b"}
                        hidden={this.hiddenEditGridCell(index)}
                        disabled={this.disabledEditGridCell(index)}
                        initialValue={value}
                        required
                        grabThis={this.grabColumnRef(index, "b")}
                    />
                )
            },
            {
                title: "性别", dataIndex: "c", key: "c", width: 200,
                render: (value, record, index) => (
                    <SelectEditGridCell
                        colName={"性别"}
                        colCode={"c"}
                        hidden={this.hiddenEditGridCell(index)}
                        disabled={this.disabledEditGridCell(index)}
                        initialValue={this.hiddenEditGridCell(index)? sexData.find(sex => sex.code === value).value: value}
                        required
                        dataSource={sexData}
                        grabThis={this.grabColumnRef(index, "c")}
                    />
                )
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
        const data = [
            {a: undefined, b: undefined, c: undefined, key: "-1"},
            {a: "201903280005", b: "小张", c: "female", r: '人员1', key: "1001"},
            {a: "201903200004", b: "小明", c: "female", r: '人员2', key: "1002"},
            {a: "201903120001", b: "小红", c: "male", r: '人员3', key: "1003"},
            {a: "201903120002", b: "小姚", c: "male", r: '人员4', key: "1004"},
            {a: "201903120003", b: "小岳", c: "female", r: '人员3', key: "1005"},
            {a: "201903120004", b: "小王", c: "female", r: '人员2', key: "1006"},
            {a: "201903120005", b: "小绍", c: "female", r: '人员1', key: "1007"},
            {a: "201903120006", b: "小郭", c: "female", r: '人员4', key: "1008"},
            {a: "201903120007", b: "小杨", c: "male", r: '人员1', key: "1009"}
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

export default TestTableEditCell;
