import React, { useState } from "react";

export const ArrowButton = ({
  setParentState,
  buttonClass,
  tipValues,
  lang,
}) => {
  const [tooltipValue, setTooltipValue] = useState(0);
  let timeOutId;

  const handleClic = (e) => {
    e.preventDefault();
    clearTimeout(timeOutId);

    setParentState();

    timeOutId = setTimeout(
      () => setTooltipValue(tooltipValue === 0 ? 1 : 0),
      500
    );
  };

  return (
    <button
      onClick={handleClic}
      className={`${buttonClass} arrow-button tooltip-hover`}
    >
      <span className="arrow-button-tip tooltip">
        {tipValues[lang === "eng" ? tooltipValue : tooltipValue + 2]}
      </span>

      <span className="left-bar"></span>
      <span className="right-bar"></span>
    </button>
  );
};
