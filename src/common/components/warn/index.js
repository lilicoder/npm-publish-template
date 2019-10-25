import React from "react";
import { Row, Col, Icon, Tile } from "tinper-bee";
import "./index.less";

let IndexView = props => {
  let { data } = props;
  return (
    <div className="warn-container">
      <div className="warn-contain">
        <Row>
          {data.map((item, index) => (
            <Col md={2} sm={3}>
              <div className="warn-box" key={index}>
                <Tile
                  key={index}
                  className={[
                    "warn",
                    !!item.isAlarm
                      ? (!item.isConfirm ? "animate" : null) +
                        " " +
                        item.alarmColor
                      : null
                  ].join(" ")}
                >
                  <Icon type="uf-exc-c-2" />
                  <div className="name" title={item.name}>
                    {item.name}
                  </div>
                  <div className="num">
                    {item.actValue}
                    <span>{item.unit}</span>
                  </div>
                  <div className="time">{item.createTime}</div>
                  <div className="opration">
                    <div
                      className="btn"
                      onClick={() => item.detailFn && item.detailFn(item)}
                    >
                      <span>{item.detailText || "详情"}</span>
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
                      <span>{item.confirmText || "确认"}</span>
                    </div>
                  </div>
                </Tile>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default IndexView;
