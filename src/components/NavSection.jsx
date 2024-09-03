import "../styles/components/nav-section.css";
import "../styles/interactions/spin-box.css";
import "../styles/interactions/tooltip.css";

import React from "react";

export const NavSection = () => {
  const mapLinks = (list) =>
    list.map((element, i) => {
      return (
        <li key={i}>
          <a
            href={`#${element}`}
            className="nav-link cancel-link-style spin-hover tooltip-hover"
          >
            <span className="nav-tip tooltip">{element}</span>
            <span className="nav-square spin-down" />
          </a>
        </li>
      );
    });

  return (
    <ul id="nav-section">{mapLinks(["top", "projects", "about", "works"])}</ul>
  );
};
