import React, { useState } from "react";
import { useLang } from "../utils/LangProvider";

export const ArrowButton = ({ setParentState, buttonClass, tipValues }) => {
  const { lang } = useLang();

  const [value, setValue] = useState(0);
  let timeOutId;

  const handleClic = (e) => {
    e.preventDefault();
    clearTimeout(timeOutId);

    setParentState();

    timeOutId = setTimeout(() => setValue(value === 0 ? 1 : 0), 500);
  };

  return (
    <button
      onClick={handleClic}
      className={`${buttonClass} arrow-button tooltip-hover`}
    >
      <span className="arrow-button-tip tooltip">{tipValues[lang][value]}</span>

      <span className="left-bar"></span>
      <span className="right-bar"></span>
    </button>
  );
};
