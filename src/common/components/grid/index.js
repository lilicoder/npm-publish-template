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
      h: 0,
      activePage: 1,
      dataNum: 10
    };
  }
  componentDidMount() {
    let _this = this;
    this.measureheight();
    window.onresize = function() {
      _this.measureheight();
    };
  }
  measureheight() {
    let h = ReactDOM.findDOMNode(this.dom.current).offsetHeight;
    this.setState({
      h: this.props.hidePagination ? h - 44 : h - 44 - 43
    });
  }
  render() {
    let { props } = this;
    let paginationObj = {
      activePage: this.state.activePage,
      size: "md",
      gap: true,
      horizontalPosition: "right",
      items: Math.ceil(props.totalPage / this.state.dataNum), //一页显示多少条
      total: props.totalPage || 0, //总共多少条
      freshData: x => {
        this.setState({ activePage: x });
        props.freshData && props.freshData(x);
      }, //点击下一页刷新的数据
      onDataNumSelect: (x, y) => {
        this.setState({
          dataNum: y
        });
        props.onDataNumSelect && props.onDataNumSelect(y); //每页大小改变触发的事件
      }
    };
    return (
      <Grid
        className={[
          props.hidePagination ? "iot-grid hidePagination" : "iot-grid",
          props.opration ? "opration-grid" : null
        ].join(" ")}
        ref={this.dom}
        columns={props.columns}
        data={props.data}
        getSelectedDataFunc={props.getSelectedDataFunc}
        paginationObj={paginationObj}
        size="md"
        headerHeight={34}
        heigth={80}
        scroll={{ y: this.state.h }}
        multiSelect={props.multiSelect || false}
      />
    );
  }
}
export default MainGrid;
