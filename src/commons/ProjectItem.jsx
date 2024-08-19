import "../styles/ProjectItem.css";
import example from "../assets/example-image.jpg";
import { useState } from "react";
import { ProjectMenu } from "./ProjectMenu";

export const ProjectItem = () => {
  const [hideExpose, setHideExpose] = useState("project-info-hide");

  const handleClic = (e) => {
    e.preventDefault();
    setHideExpose(
      hideExpose === "project-info-hide"
        ? "project-info-expose"
        : "project-info-hide"
    );
  };

  return (
    <article>
      <div className={`project-info ${hideExpose}`} onClick={handleClic}>
        <div className="project-info-header">
          <h3 className="project-title">Titulo</h3>
          <ProjectMenu />
        </div>
        <p className="project-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo sed suscipit quasi tenetur veritatis pariatur aut minus eos
          ipsum.
        </p>
      </div>
      <img
        src={example}
        alt={"ejemplo"}
        className="project-img"
        onClick={handleClic}
      />
    </article>
  );
};
