import React from "react";
import { Step } from "tinper-bee";
import "./index.less";
const Steps = Step.Steps;

let IndexView = props => {
  return (
    <div className="step-container">
      <Steps current={props.current} size="small">
        {props.steps.map(item => (
          <Step title={item.title} />
        ))}
      </Steps>
    </div>
  );
};

IndexView.defaultProps = {
  steps: [],
  current: 0
};

export default IndexView;
