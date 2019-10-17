import React from "react";
export let getComponentChild = content => {
  return content && content.length
    ? content.map((item, index) => (
        <div key={index} className={item.props.full ? "full" : ""}>
          {item}
        </div>
      ))
    : content;
};
