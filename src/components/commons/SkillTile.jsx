import React from "react";

import { useSvgImport } from "../utils/useSvgImport";

export const SkillTile = ({ skill }) => {
  const { isLoading, SvgLogo } = useSvgImport(skill.file);

  return (
    <figure className="skill-tile">
      {isLoading && <span>loading...</span>}
      {SvgLogo && <SvgLogo className="tech-logo" />}

      <figcaption className="tech-name">{skill.tech}</figcaption>
    </figure>
  );
};
