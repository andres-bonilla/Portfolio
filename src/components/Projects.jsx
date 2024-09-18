import React from "react";

import { ProjectCard } from "./commons/ProjectCard";
import { useLang } from "./utils/LangProvider";

export const Projects = ({ projects, skills }) => {
  const { lang } = useLang();

  const mapProjects = (list) =>
    list.map((data, i) => {
      return (
        <li key={i} className="project-item">
          <ProjectCard data={data} skills={skills} />
        </li>
      );
    });

  return (
    <section id="projects">
      <h2>{lang === "eng" ? "Projects" : "Proyectos"}</h2>

      {/*<p>
        Here are some of my projects. If you have any advice, I'll be eager to receive your
        feedback!
      </p> */}

      <ul className="project-grid">{mapProjects(projects)}</ul>
    </section>
  );
};
