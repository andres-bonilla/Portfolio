import React, { useState } from "react";

export const ArrowButton = ({ setParentState, buttonClass, tipValues }) => {
  const [tooltipValue, setTooltipValue] = useState(tipValues[0]);
  let timeOutId;

  const handleClic = (e) => {
    e.preventDefault();
    clearTimeout(timeOutId);

    setParentState();

    timeOutId = setTimeout(
      () =>
        setTooltipValue(
          tooltipValue === tipValues[1] ? tipValues[0] : tipValues[1]
        ),
      500
    );
  };

  return (
    <button
      onClick={handleClic}
      className={`${buttonClass} arrow-button tooltip-hover`}
    >
      <span className="arrow-button-tip tooltip">{tooltipValue}</span>

      <span className="left-bar"></span>
      <span className="right-bar"></span>
    </button>
  );
};
