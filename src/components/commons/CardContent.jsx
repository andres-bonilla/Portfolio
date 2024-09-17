import React from "react";

import { ProjectSkill } from "./ProjectSkill";

export const CardContent = ({
  showInfo,
  description,
  links,
  skillsIndex,
  skills,
  lang,
}) => {
  const mapProjectSkills = (list) =>
    list.map((element, i) => {
      return (
        <li key={i} className="project-skill tooltip-hover">
          <ProjectSkill skill={skills[element]} />
        </li>
      );
    });

  return (
    <main className={`project-info ${showInfo ? "show-info" : ""}`}>
      <p className="project-description">{description}</p>
      <div className="project-info-foot">
        <ul className="project-skill-list">{mapProjectSkills(skillsIndex)}</ul>

        <div className="project-links">
          {links[1] !== "No Demo" && (
            <a
              href={links[1]}
              target="_blank"
              className="project-button link-button cancel-link-style"
            >
              Demo
            </a>
          )}
          <a
            href={links[0]}
            target="_blank"
            className="project-button link-button cancel-link-style"
          >
            {lang === "eng" ? "Code" : "Código"}
          </a>
        </div>
      </div>
    </main>
  );
};
