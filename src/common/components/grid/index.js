import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "bee-complex-grid";
import "bee-complex-grid/build/Grid.css";
import "./index.less";

class MainGrid extends Component {
  constructor(props) {
    super(props);
    this.dom = React.createRef();
    this.state = {
      h: 0
    };
  }
  componentDidMount() {
    this.setState({
      h: ReactDOM.findDOMNode(this.dom.current).offsetHeight - 44 - 43
    });
  }
  render() {
    let { props } = this;
    let paginationObj = {
      size: "md",
      gap: true,
      horizontalPosition: "right",
      items: props.items || 10, //一页显示多少条
      total: props.totalPage || 0, //总共多少条
      freshData: props.freshData, //点击下一页刷新的数据
      onDataNumSelect: props.onDataNumSelect //每页大小改变触发的事件
    };
    return (
      <Grid
        className="iot-grid"
        ref={this.dom}
        columns={props.columns}
        data={props.data}
        getSelectedDataFunc={props.getSelectedDataFunc}
        paginationObj={paginationObj}
        size="md"
        headerHeight={34}
        heigth={40}
        scroll={{ y: this.state.h }}
        multiSelect={props.multiSelect || false}
      />
    );
  }
}
export default MainGrid;
