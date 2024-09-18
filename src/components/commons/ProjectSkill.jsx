import React from "react";

import { useSvgImport } from "../utils/useSvgImport";

export const ProjectSkill = ({ skill }) => {
  const { isLoading, SvgLogo } = useSvgImport(skill.file);

  return (
    <>
      <span className="project-skill-tip tooltip">{skill.tech}</span>

      {isLoading && <span>...</span>}
      {SvgLogo && <SvgLogo className="project-skill-logo" />}
    </>
  );
};
