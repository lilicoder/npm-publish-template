import React from "react";
import { Icon, Tile } from "tinper-bee";
import "./index.less";

let IndexView = props => {
  let { data } = props;
  return (
    <div className="tile-container">
      <div className="tile-contain">
        {data.map((item, index) => (
          <div className="tile-box" key={index}>
            {item.type === "new" ? (
              <Tile key={index} className="tile">
                <div className="add-circle" onClick={() => item.newFn()}>
                  +
                </div>
                <div className="new" onClick={() => item.newFn()}>
                  新建{item.name}
                </div>
              </Tile>
            ) : (
              <Tile className="tile">
                <div className="icon">
                  <Icon type="uf-mac" />
                </div>
                <div className="name">{item.name}</div>
                <div className="description">
                  {item.description}
                  <div className="opration">
                    <Icon
                      type="uf-pencil-s"
                      onClick={() => item.editFn && item.editFn(item)}
                    />
                    <Icon
                      type="uf-del"
                      onClick={() => item.deleteFn && item.deleteFn(item)}
                    />
                  </div>
                </div>
              </Tile>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexView;
