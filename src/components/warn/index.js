import React from "react";
import { Icon, Tile } from "tinper-bee";
import "./index.less";

let IndexView = props => {
  let { data } = props;
  function getColor(num) {
    return "#ed3d34";
  }
  return (
    <div className="warn-container">
      <div className="warn-contain">
        {data.map((item, index) => (
          <div className="warn-box" key={index}>
            <Tile key={index} className="warn">
              <div className="name">
                {item.name}
                <Icon
                  type="uf-exc-c-2"
                  style={{ color: !!item.isAlarm && getColor(item.alarmColor) }}
                />
              </div>
              <div
                className="num"
                style={{ color: !!item.isAlarm && getColor(item.alarmColor) }}
              >
                {item.actValue}
                <span>{item.unit}</span>
              </div>
              <div className="time">{item.createTime}</div>
              <div className="opration">
                <div
                  className="btn"
                  onClick={() => item.detailFn && item.detailFn(item)}
                >
                  <span>详情</span>
                </div>
                <div
                  className={
                    item.isConfirm || !item.isAlarm ? "disabled btn" : "btn"
                  }
                  onClick={() =>
                    !item.isConfirm &&
                    item.isAlarm &&
                    item.confirmFn &&
                    item.confirmFn(item)
                  }
                >
                  <span>确认</span>
                </div>
              </div>
            </Tile>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexView;
