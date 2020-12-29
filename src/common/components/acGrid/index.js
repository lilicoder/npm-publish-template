import React, { Component } from "react";
import AcGrids from "ac-grids";
import "ac-grids/build/AcGrids.css";
import "./index.less";
import ReactDOM from "react-dom";

class MainAcGrid extends Component {
  constructor(props) {
    super(props);
    this.dom = React.createRef();
    this.state = {
      h: null,
      activePage: 1,
      dataNum: 1,
      dataNumSelect: 10,
    };
  }
  componentDidMount() {
    let _this = this;
    if (this.props.isSingle) {
      this.measureheight();
      window.addEventListener("resize", function () {
        _this.measureheight();
      });
    }
  }
  measureheight() {
    let h = ReactDOM.findDOMNode(this.dom).offsetHeight;
    console.log(h, "lll");
    this.setState({
      h: h - 40,
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
      dataNum: props.dataNum || this.state.dataNum,
      maxButtons: 10,
      boundaryLinks: true,
      // horizontalPosition: "right",
      items: Math.ceil(props.totalPage / itemNum), //一页显示多少条
      total: props.totalPage || 0, //总共多少条
      onSelect: (x) => {
        if (!props.activePage) {
          this.setState({ activePage: x });
        }
        props.freshData && props.freshData(x);
      }, //点击下一页刷新的数据
      onDataNumSelect: (x) => {
        this.setState({
          dataNum: x / 10,
          dataNumSelect: x,
        });
        props.onDataNumSelect && props.onDataNumSelect(x, x / 10); //每页大小改变触发的事件
      },
    };
    return (
      <div
        className="iot-ac-grid"
        style={{ height: props.isSingle ? "100%" : "auto" }}
        ref={(ref) => (this.dom = ref)}
      >
        <AcGrids
          showIndex={this.props.showIndex}
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
          columns={props.columns}
          data={props.data}
          // syncHover={false}
          onRowHover={props.onRowHover}
          rowKey={props.rowKey || "id"}
          onRowClick={(x, y) => {
            this.setState({
              selectedRowIndex: y,
            });
            props.onRowClick && props.onRowClick(x, y);
          }}
          onRowDoubleClick={props.onRowDoubleClick}
          emptyText={props.emptyText}
          loading={{
            show: props.loading,
            loadingType: "custom", //启用自定义图标
            indicator: (
              <span className="s-loading-dot">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
            ),
            children: props.loadingText || "加载中...",
          }}
          getSelectedDataFunc={props.getSelectedDataFunc}
          showPagination={!props.hidePagination}
          paginationObj={paginationObj}
          showHeaderMenu={false}
          headerHeight={35}
          scroll={props.scroll || { y: this.state.h }}
          multiSelect={props.multiSelect || false}
          draggable={false}
        />
      </div>
    );
  }
}
export default MainAcGrid;
