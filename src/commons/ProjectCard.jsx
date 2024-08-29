import "../styles/ProjectCard.css";
import "../styles/interactions/info-button.css";
import example from "../assets/example-image.jpg";
import { useState } from "react";
import { ProjectMenu } from "./ProjectMenu";

export const ProjectCard = () => {
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
        <h3 className="project-title">Titulo</h3>
        <p className="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo sed suscipit quasi tenetur veritatis pariatur aut minus eos
          ipsum.
        </p>
      </div>

      <img src={example} alt={"ejemplo"} className="project-img" />

      <button class="info-button arrow-icon" onClick={handleClic}>
        <span class="left-bar"></span>
        <span class="right-bar"></span>
      </button>
    </article>
  );
};
