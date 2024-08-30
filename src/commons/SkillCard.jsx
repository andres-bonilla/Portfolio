import React from "react";
import { ReactComponent as WaitingLogo } from "../assets/tech-logos/axios.svg";
import { useSvgImport } from "../Utils/useSvgImport";

export const SkillCard = ({ techName, fileName }) => {
  const { isLoading, SvgLogo } = useSvgImport(fileName);

  return (
    <figure className="skill">
      {isLoading && <WaitingLogo className="tech-logo" />}
      {SvgLogo && <SvgLogo className="tech-logo" />}
      <figcaption className="tech-name">{techName}</figcaption>
    </figure>
  );
};
