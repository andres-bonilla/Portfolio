import React, { useState } from "react";

import { ProjectSkill } from "./ProjectSkill";
import { CardFoot } from "./CardFoot";

export const ProjectCard = ({ data, skills, lang }) => {
  const [showInfo, setShowInfo] = useState(false);

  const setInfoClass = () => setShowInfo(!showInfo);

  const mapProjectSkills = (list) =>
    list.map((element, i) => {
      return (
        <li key={i} className="project-skill tooltip-hover">
          <ProjectSkill skill={skills[element]} />
        </li>
      );
    });

  return (
    <article>
      <header className="project-header">
        <h3 className="project-title">{data.name}</h3>
      </header>
      <main className={`project-info ${showInfo ? "show-info" : ""}`}>
        <p className="project-description">{data.description[lang]}</p>
        <ul className="project-skill-list">{mapProjectSkills(data.skills)}</ul>
      </main>

      <CardFoot
        setInfoClass={setInfoClass}
        imgArr={data.img}
        imgType={data.imgType}
      />
    </article>
  );
};
