import React, { Component } from "react";
import Layout from "../../components/basicLayout";
import ColorSelect from "../../components/colorSelect";
import "./index.less";

class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: "Green",
          des: "绿"
        },
        {
          value: "Red",
          des: "红"
        },
        {
          value: "Yellow",
          des: "黄"
        },
        {
          value: "Orange",
          des: "橙"
        },
        {
          value: "Blue",
          des: "蓝"
        },
        {
          value: "Crimson",
          des: "酒红"
        }
      ]
    };
  }

  render() {
    let content = [
      <div style={{ width: 200 }}>
        <ColorSelect
          data={this.state.data}
          onChange={value =>
            this.setState({
              selectedColor: value
            })
          }
          value={this.state.selectedColor}
        />
        <ColorSelect disabled={true} value="Green" />
      </div>
    ];

    return <Layout content={content} />;
  }
}

export default IndexView;
