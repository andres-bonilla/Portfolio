import "../../styles/components/ProjectMenu.css";

import React from "react";
import { ReactComponent as LinkLogo } from "../../assets/icons/link2.svg";
import { ReactComponent as CodeLogo } from "../../assets/icons/code3.svg";
import { ReactComponent as InfoLogo } from "../../assets/icons/info.svg";

export const ProjectMenu = () => {
  return (
    <ul className="project-menu">
      <li>
        <a href="" className="project-menu-link cancel-link-style">
          <LinkLogo className="project-menu-icon" />
        </a>
      </li>
      <li>
        <a href="" className="project-menu-link cancel-link-style">
          <CodeLogo className="project-menu-icon" />
        </a>
      </li>
      <li>
        <a href="" className="project-menu-link cancel-link-style more-info">
          <InfoLogo className="project-menu-icon" />
        </a>
      </li>
    </ul>
  );
};
