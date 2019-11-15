import React, { Component } from "react";
import ReactDOM from "react-dom";
import AcGrids from "ac-grids";
import "ac-grids/build/AcGrids.css";
// import "./index.less";

class MainAcGrid extends Component {
  constructor(props) {
    super(props);
    this.dom = React.createRef();
    this.state = {
      h: null,
      activePage: 1,
      dataNum: 1
    };
  }
  // componentDidMount() {
  //   let _this = this;
  //   if (!!this.props.full) {
  //     this.measureheight();
  //     window.addEventListener("resize", function() {
  //       _this.measureheight();
  //     });
  //   }
  // }
  // measureheight() {
  //   let h = ReactDOM.findDOMNode(this.dom).offsetHeight;
  //   this.setState({
  //     h: this.props.hidePagination ? h - 44 - 10 : h - 44 - 43 - 10
  //   });
  // }
  render() {
    let { props } = this;
    let paginationObj = {
      activePage: props.activePage || this.state.activePage,
      dataNum: props.dataNum || this.state.dataNum,
      maxButtons: 10,
      boundaryLinks: true,
      // horizontalPosition: "right",
      items: Math.ceil(props.totalPage / (props.dataNum || this.state.dataNum)), //一页显示多少条
      total: props.totalPage || 0, //总共多少条
      onSelect: x => {
        if (!props.activePage) {
          this.setState({ activePage: x });
        }
        props.freshData && props.freshData(x);
      }, //点击下一页刷新的数据
      onDataNumSelect: y => {
        this.setState({
          dataNum: y
        });
        props.onDataNumSelect && props.onDataNumSelect(y); //每页大小改变触发的事件
      }
    };
    return (
      <AcGrids
        rowClassName={(record, index) => {
          let styles = "";
          if (this.state.selectedRowIndex === index) {
            styles += "selected";
          }
          if (this.state.hoverIndex === index) {
            styles += "hover";
          }
          return styles;
        }}
        className={["iot-ac-grid", props.full ? "full" : ""].join(" ")}
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
        showPagination={!props.hidePagination}
        paginationObj={paginationObj}
        showHeaderMenu={false}
        // scroll={{ y: this.state.h }}
        multiSelect={props.multiSelect || false}
        draggable={false}
      />
    );
  }
}
export default MainAcGrid;
