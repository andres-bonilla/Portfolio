import React from "react";

import { ProjectSkill } from "./ProjectSkill";
import { useLang } from "../utils/LangProvider";

export const CardContent = ({ hideInfo, data, skills }) => {
  const { lang } = useLang();

  const mapProjectSkills = (list) =>
    list.map((index, i) => {
      return (
        <li key={i} className="project-skill tooltip-hover">
          <ProjectSkill skill={skills[index]} />
        </li>
      );
    });

  return (
    <main className={`project-info ${hideInfo ? "" : "show-info"}`}>
      <p className="project-description">{data.description[lang]}</p>

      <div className="project-info-foot">
        <ul className="project-skill-list">
          {mapProjectSkills(data.skillIndex)}
        </ul>

        <div className="project-links">
          {data.links[1] !== "No Demo" && (
            <a
              href={data.links[1]}
              target="_blank"
              className="project-button link-button cancel-link-style"
            >
              Demo
            </a>
          )}
          <a
            href={data.links[0]}
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
