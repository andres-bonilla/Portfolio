import "../../styles/components/project-card.css";

import React, { useState } from "react";
import { ArrowButton } from "./ArrowButton";

export const ProjectCard = ({ data, lang }) => {
  const [hideShowClass, setHideShowClass] = useState("project-info-hide");

  const setHeaderClass = () =>
    setHideShowClass(
      hideShowClass === "project-info-hide"
        ? "project-info-show"
        : "project-info-hide"
    );

  return (
    <article>
      <div className={`project-info ${hideShowClass}`}>
        <h3 className="project-title">{data.name}</h3>

        <p className="project-description">{data.description[lang]}</p>
      </div>

      <img src={data.img} alt={"ejemplo"} className="project-img" />

      <ArrowButton setParentState={setHeaderClass} buttonClass="info-button" />
    </article>
  );
};
