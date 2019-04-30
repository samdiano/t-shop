import React, { Fragment } from "react";

const Steps = props => {
  const clickFunc = () => {
    props.nextStep();
    props.actionCall();
  };
  return (
    <Fragment>
      <div className="card checkout">
        <div className="card-body">
          <h3>Checkout</h3>
          {props.content}
        </div>
        <div className="card-footer checkout-footer">
          {props.currentStep > 1 && (
            <button onClick={props.previousStep} className="checkout-back">
              Back
            </button>
          )}
          <button onClick={clickFunc} className="checkout-next">
            Next Step
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Steps;
