import "../styles/ProjectCard.css";
import "../styles/interactions/info-button.css";
import example from "../assets/example-image.jpg";
import { useState } from "react";
import { ProjectMenu } from "./ProjectMenu";

export const ProjectCard = ({ projectData, lang }) => {
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
        <h3 className="project-title">{projectData.name}</h3>
        <p className="project-text">{projectData.text[lang]}</p>
      </div>

      <img src={example} alt={"ejemplo"} className="project-img" />

      <button className="info-button arrow-icon" onClick={handleClic}>
        <span className="left-bar"></span>
        <span className="right-bar"></span>
      </button>
    </article>
  );
};
