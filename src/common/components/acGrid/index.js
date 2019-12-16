import React, { Component } from "react";
import AcGrids from "ac-grids";
import "ac-grids/build/AcGrids.css";
import "./index.less";

class MainAcGrid extends Component {
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
    let itemNum = this.state.dataNumSelect;
    if (props.dataNum || props.dataNum === 0) {
      itemNum = (props.dataNum + 1) * 5;
    }
    let paginationObj = {
      activePage: props.activePage || this.state.activePage,
      dataNum: props.dataNum || this.state.dataNum,
      maxButtons: 10,
      boundaryLinks: true,
      // horizontalPosition: "right",
      items: Math.ceil(props.totalPage / itemNum), //一页显示多少条
      total: props.totalPage || 0, //总共多少条
      onSelect: x => {
        if (!props.activePage) {
          this.setState({ activePage: x });
        }
        props.freshData && props.freshData(x);
      }, //点击下一页刷新的数据
      onDataNumSelect: x => {
        this.setState({
          dataNum: x / 10,
          dataNumSelect: x
        });
        props.onDataNumSelect && props.onDataNumSelect(x, x / 10); //每页大小改变触发的事件
      }
    };
    return (
      <div className="iot-ac-grid">
      <AcGrids
        rowClassName={(record, index) => {
          let styles = "";
          if (this.state.selectedRowIndex === index) {
            styles += "selected";
          }
          // if (this.state.hoverIndex === index) {
          //   styles += "hover";
          // }
          return styles;
        }}
        columnFilterAble={true}
        ref={ref => (this.dom = ref)}
        columns={props.columns}
        data={props.data}
        // syncHover={false}
        // onRowHover={index =>
        //   this.setState({
        //     hoverIndex: index
        //   })
        // }
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
        headerHeight={35}
        // scroll={{ y: this.state.h }}
        multiSelect={props.multiSelect || false}
        draggable={false}
      /></div>
    );
  }
}
export default MainAcGrid;
