import "../../styles/components/project-card.css";
import "../../styles/interactions/info-button.css";
import "../../styles/interactions/tooltip.css";
import React, { useState } from "react";

export const ProjectCard = ({ data, lang }) => {
  const [hideExposeClass, setHideExposeClass] = useState("project-info-hide");

  const handleClic = (e) => {
    e.preventDefault();
    setHideExposeClass(
      hideExposeClass === "project-info-hide"
        ? "project-info-expose"
        : "project-info-hide"
    );
  };

  return (
    <article>
      <div className={`project-info ${hideExposeClass}`}>
        <h3 className="project-title">{data.name}</h3>
        <p className="project-text">{data.text[lang]}</p>
      </div>

      <img src={data.img} alt={"ejemplo"} className="project-img" />

      <button
        className="info-button arrow-icon tooltip-hover"
        onClick={handleClic}
      >
        <span className="info-button-tooltip tooltip">Info</span>
        <span className="left-bar"></span>
        <span className="right-bar"></span>
      </button>
    </article>
  );
};
