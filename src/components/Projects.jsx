import "../styles/components/projects.css";

import React from "react";
import { ProjectCard } from "./commons/ProjectCard";

export const Projects = ({ projects, lang }) => {
  const mapProjects = (list) =>
    list.map((data, i) => {
      return (
        <li key={i} className="project-item">
          <ProjectCard data={data} lang={lang} />
        </li>
      );
    });

  return (
    <section id="projects">
      <h2>Projects</h2>

      {/*<p>
        If you have any advice for my projects, I'll be eager to receive your
        feedback!
      </p> */}

      <ul className="project-grid">{mapProjects(projects)}</ul>
    </section>
  );
};
