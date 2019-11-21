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
      h: null,
      activePage: 1,
      dataNum: 1,
      dataNumSelect: 10
    };
  }
  componentDidMount() {
    let _this = this;
    if (!!this.props.full) {
      this.measureheight();
      window.addEventListener("resize", function() {
        _this.measureheight();
      });
    }
  }
  measureheight() {
    let h = ReactDOM.findDOMNode(this.dom).offsetHeight;
    this.setState({
      h: this.props.hidePagination ? h - 44 - 10 : h - 44 - 43 - 10
    });
  }
  render() {
    let { props } = this;
    let itemNum = this.state.dataNumSelect;
    if (props.dataNum || props.dataNum === 0) {
      itemNum = (props.dataNum + 1) * 5;
    }
    let paginationObj = {
      activePage: props.activePage || this.state.activePage,
      dataNum:
        props.dataNum || props.dataNum === 0
          ? props.dataNum
          : this.state.dataNum,
      size: "md",
      gap: true,
      horizontalPosition: "right",
      items: Math.ceil(props.totalPage / itemNum), //一页显示多少条
      total: props.totalPage || 0, //总共多少条
      freshData: x => {
        if (!props.activePage) {
          this.setState({ activePage: x });
        }
        props.freshData && props.freshData(x);
      }, //点击下一页刷新的数据
      onDataNumSelect: (x, y) => {
        if (!props.activePage) {
          this.setState({ activePage: x });
        }
        this.setState({
          dataNum: x,
          dataNumSelect: y
        });
        props.onDataNumSelect && props.onDataNumSelect(y, x); //每页大小改变触发的事件
      }
    };
    return (
      <Grid
        rowClassName={(record, index) => {
          let styles = "";
          if (this.state.selectedRowIndex === index) {
            styles += "selected ";
          }
          if (this.state.hoverIndex === index) {
            styles += "hover";
          }
          return styles;
        }}
        className={[
          props.opration ? "opration-grid" : null,
          "iot-grid",
          props.full ? "full" : ""
        ].join(" ")}
        ref={ref => (this.dom = ref)}
        columns={props.columns}
        data={props.data}
        syncHover={false}
        onRowHover={index =>
          this.setState({
            hoverIndex: index
          })
        }
        rowKey={this.props.rowKey || "id"}
        onRowClick={(x, y) => {
          this.setState({
            selectedRowIndex: y
          });
          this.props.onRowClick && this.props.onRowClick(x, y);
        }}
        loading={props.loading}
        getSelectedDataFunc={props.getSelectedDataFunc}
        paginationObj={props.hidePagination ? "none" : paginationObj}
        size="md"
        showHeaderMenu={false}
        headerHeight={34}
        height={40}
        scroll={{ y: this.state.h }}
        multiSelect={props.multiSelect || false}
        draggable={false}
      />
    );
  }
}
export default MainGrid;
