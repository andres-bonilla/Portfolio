import "../../styles/components/about-skills.css";

import React from "react";
import { useSvgImport } from "../utils/useSvgImport";

export const SkillCard = ({ skill }) => {
  const { isLoading, SvgLogo } = useSvgImport(skill.source);

  return (
    <figure className="skill-card">
      {isLoading && <p>loading...</p>}
      {SvgLogo && <SvgLogo className="tech-logo" />}

      <figcaption className="tech-name">{skill.tech}</figcaption>
    </figure>
  );
};
