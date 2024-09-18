import React, { useState } from "react";

import { CardContent } from "./CardContent";
import { CardFoot } from "./CardFoot";

export const ProjectCard = ({ data, skills }) => {
  const [isHide, setIsHide] = useState(false);

  const setInfoState = () => setIsHide(!isHide);

  return (
    <article>
      <header className="project-header">
        <h3 className="project-title">{data.name}</h3>
      </header>

      <CardContent hideInfo={isHide} data={data} skills={skills} />

      <CardFoot setInfo={setInfoState} img={data.img} />
    </article>
  );
};
