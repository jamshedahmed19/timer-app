import React from "react";
import PropTypes from "prop-types";
//import './TimerButton.css';

const TimerButton = ({ buttonAction, buttonValue }: any) => (
  <div className="button-container" onClick={() => buttonAction()}>
    <button
      className={`${buttonValue.toLowerCase()}-timer`}>
      {buttonValue}
    </button>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;
