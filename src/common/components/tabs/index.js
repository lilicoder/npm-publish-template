import React from "react";
import "./index.less";
import Tabs from "bee-tabs";
import "bee-tabs/build/Tabs.css";
const { TabPane } = Tabs;

const IotTabs = props => {
  return (
    <div className="iot-tabs">
      <Tabs
        defaultActiveKey={props.defaultActiveKey || "0"}
        onChange={props.onChange}
      >
        {props.content.map((item, index) => (
          <TabPane tab={item.props.name} key={index}>
            {item}
          </TabPane>
        ))}
      </Tabs>
      <div className="right-button">{props.rightButton}</div>
    </div>
  );
};
IotTabs.defaultProps = {
  content: []
};
export default IotTabs;
