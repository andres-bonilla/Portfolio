import React from "react";

import { useSvgImport } from "../utils/useSvgImport";

export const ProjectSkill = ({ skill }) => {
  const { isLoading, SvgLogo } = useSvgImport(skill.source);

  return (
    <>
      <span className="project-skill-tip tooltip">{skill.tech}</span>

      {isLoading && <p>...</p>}
      {SvgLogo && <SvgLogo className="project-skill-logo" />}
    </>
  );
};
