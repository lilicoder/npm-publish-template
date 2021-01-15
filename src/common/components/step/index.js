/*
 * @Descripttion:
 * @version:
 * @Author: lianglli
 * @Date: 2019-12-24 09:31:49
 * @LastEditors: lianglli
 * @LastEditTime: 2021-01-15 12:22:17
 */
import React from "react";
import Step from "bee-step";
import "bee-step/build/Step.css";
import "./index.less";
const Steps = Step.Steps;

let IndexView = (props) => {
  return (
    <div className="step-container">
      <Steps current={props.current} size="small">
        {props.steps.map((item) => (
          <Step title={item.title} />
        ))}
      </Steps>
    </div>
  );
};

IndexView.defaultProps = {
  steps: [],
  current: 0,
};

export default IndexView;
