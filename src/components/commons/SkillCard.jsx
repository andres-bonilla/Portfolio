import "../../styles/components/about-skill-card.css";

import React from "react";
import { ReactComponent as WaitingLogo } from "../../assets/tech-logos/axios.svg";
import { useSvgImport } from "../utils/useSvgImport";

export const SkillCard = ({ skill }) => {
  const { isLoading, SvgLogo } = useSvgImport(
    `../../assets/tech-logos/${skill["file-name"]}.svg`
  );

  return (
    <figure className="skill">
      {isLoading && <WaitingLogo className="tech-logo" />}
      {SvgLogo && <SvgLogo className="tech-logo" />}

      <figcaption className="tech-name">{skill.tech}</figcaption>
    </figure>
  );
};
