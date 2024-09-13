import React from "react";

import { ProjectCard } from "./commons/ProjectCard";

export const Projects = ({ data, lang }) => {
  const mapProjects = (list) =>
    list.map((projectData, i) => {
      return (
        <li key={i} className="project-item">
          <ProjectCard data={projectData} skills={data.skills} lang={lang} />
        </li>
      );
    });

  return (
    <section id="projects">
      <h2>Projects</h2>

      {/*<p>
        Here are some of my projects. If you have any advice, I'll be eager to receive your
        feedback!
      </p> */}

      <ul className="project-grid">{mapProjects(data.projects)}</ul>
    </section>
  );
};
