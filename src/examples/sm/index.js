import React, { Component } from "react";
import {
  BasicLayout as Layout,
  ColorSelect,
  Select,
  TreeSelect,
  Pagination,
  SearchInput,
  InputNumber,
  InputNumberGroup,
  Input
} from "../../common";

import "./index.less";

class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [
      //   {
      //     value: "Green",
      //     des: "绿"
      //   },
      //   {
      //     value: "Red",
      //     des: "红"
      //   },
      //   {
      //     value: "Yellow",
      //     des: "黄"
      //   },
      //   {
      //     value: "Orange",
      //     des: "橙"
      //   },
      //   {
      //     value: "Blue",
      //     des: "蓝"
      //   },
      //   {
      //     value: "Crimson",
      //     des: "酒红"
      //   }
      // ],
      selectData: [
        {
          value: "选项1",
          code: "x1"
        },
        {
          value: "选项2",
          code: "x2"
        }
      ],
      treeData: [
        {
          title: "Node1",
          value: "0-0",
          key: "0-0",
          children: [
            {
              title: "Child Node1",
              value: "0-0-1",
              key: "0-0-1",
              children: [
                {
                  title: "Child Node1",
                  value: "0-0-1",
                  key: "0-0-1"
                },
                {
                  title: "Child Node2",
                  value: "0-0-2",
                  key: "0-0-2"
                }
              ]
            },
            {
              title: "Child Node2",
              value: "0-0-2",
              key: "0-0-2"
            }
          ]
        },
        {
          title: "Node2",
          value: "0-1",
          key: "0-1"
        }
      ]
    };
  }
  render() {
    let content = [
      <div style={{ width: 200 }}>
        <h4>颜色选择</h4>
        <ColorSelect
          // data={this.state.data}
          onChange={value =>
            this.setState({
              selectedColor: value
            })
          }
          value={this.state.selectedColor}
        />
        <ColorSelect disabled={true} value="Green" />
      </div>,
      <div style={{ width: 200 }}>
        <h4>普通下拉</h4>
        <Select
          data={this.state.selectData}
          onChange={value => {
            this.setState({
              selectedCode: value
            });
          }}
          showError={this.state.visible}
          errorText={
            <div>
              错误信息第一行
              <br />
              错误信息第二行
            </div>
          }
          value={this.state.selectedCode}
        />

        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          显示、隐藏错误信息
        </button>
      </div>,
      <div style={{ width: 200 }}>
        <h4>树形下拉</h4>
        <TreeSelect
          treeData={this.state.treeData}
          value={this.state.treeValue}
          onSelect={value => {
            this.setState({
              treeValue: value
            });
            console.log(value);
          }}
          showError={this.state.visible}
          errorText={"我是错误信息"}
        />
      </div>,
      <div>
        <h4>分页</h4>
        <Pagination
          // activePage={2}
          dataNum={10}
          totalPage={50}
          freshData={x => console.log(x)}
          onDataNumSelect={x => console.log(x, "999")}
        />
      </div>,
      <div>
        <h4>输入框</h4>
        <Input
          onChange={x => console.log(x)}
          value="xxx"
          showError={this.state.visible}
          errorText={"我是错误信息"}
        />
      </div>,
      <div>
        <h4>搜索框</h4>
        <SearchInput
          onSearch={x => console.log(x)}
          // value="xxx"
          showError={this.state.visible}
          errorText={"我是错误信息"}
        />
      </div>,
      <div style={{ width: 200 }}>
        <h4>数字框</h4>
        <InputNumber
          onChange={x => this.setState({ num: x })}
          value={this.state.num}
          min={0}
          max={10}
          precision={5}
          showError={this.state.visible}
          errorText={"我是错误信息"}
        />
      </div>,
      <div style={{ width: 400 }}>
        <h4>数字框组</h4>
        <InputNumberGroup
          onChange={x => console.log(x)}
          value={this.state.num}
          min={0}
          max={10}
          precision={5}
          showError={this.state.visible}
          errorText={"我是错误信息"}
        />
      </div>
    ];

    return <Layout content={content} />;
  }
}

export default IndexView;
