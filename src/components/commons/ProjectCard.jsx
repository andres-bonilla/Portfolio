import React, { useState } from "react";

import { CardContent } from "./CardContent";
import { CardFoot } from "./CardFoot";

export const ProjectCard = ({ data, skills, lang }) => {
  const [showInfo, setShowInfo] = useState(true);

  const setInfoClass = () => setShowInfo(!showInfo);

  return (
    <article>
      <header className="project-header">
        <h3 className="project-title">{data.name}</h3>
      </header>

      <CardContent
        showInfo={showInfo}
        description={data.description[lang]}
        links={data.links}
        skillsIndex={data.skills}
        skills={skills}
      />

      <CardFoot
        setInfoClass={setInfoClass}
        imgArr={data.img}
        imgType={data.imgType}
      />
    </article>
  );
};
