import "../../styles/interactions/arrow-button.css";
import "../../styles/interactions/tooltip.css";

import React, { useState } from "react";

export const ArrowButton = ({ setParentState, buttonClass }) => {
  const [tooltipValue, setTooltipValue] = useState("Show");
  let timeOutId;

  const handleClic = (e) => {
    e.preventDefault();
    clearTimeout(timeOutId);

    setParentState();

    timeOutId = setTimeout(
      () => setTooltipValue(tooltipValue === "Hide" ? "Show" : "Hide"),
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
