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
    <>
      <div id="nav-burguer" className="tooltip-hover">
        <span className="burguer-tip tooltip" />
        <input type="checkbox" id="check-burguer" />
        <div className="burguer-square-box">
          <span className="burguer-square" />
          <span className="burguer-square" />
          <span className="burguer-square" />
        </div>
      </div>

      <ul id="nav-section">{mapLinks(["top", "projects", "about"])}</ul>
    </>
  );
};
