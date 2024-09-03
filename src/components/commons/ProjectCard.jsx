import "../../styles/components/project-card.css";
import "../../styles/interactions/info-button.css";
import "../../styles/interactions/tooltip.css";

import React, { useState } from "react";

export const ProjectCard = ({ data, lang }) => {
  const [hideShowClass, setHideShowClass] = useState("project-info-hide");
  const [tooltipValue, setTooltipValue] = useState("Show");
  let timeOutId;

  const handleClic = (e) => {
    e.preventDefault();
    clearTimeout(timeOutId);

    setHideShowClass(
      hideShowClass === "project-info-hide"
        ? "project-info-show"
        : "project-info-hide"
    );

    timeOutId = setTimeout(
      () => setTooltipValue(tooltipValue === "Hide" ? "Show" : "Hide"),
      500
    );
  };

  return (
    <article>
      <div className={`project-info ${hideShowClass}`}>
        <h3 className="project-title">{data.name}</h3>

        <p className="project-description">{data.description[lang]}</p>
      </div>

      <img src={data.img} alt={"ejemplo"} className="project-img" />

      <button
        onClick={handleClic}
        className="info-button arrow-icon tooltip-hover"
      >
        <span className="info-button-tooltip tooltip">{tooltipValue}</span>

        <span className="left-bar"></span>
        <span className="right-bar"></span>
      </button>
    </article>
  );
};
