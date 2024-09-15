import React, { useState } from "react";

export const NavSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const changeSection = (section) => {
    setActiveSection(section);
  };
  const mapLinks = (list) =>
    list.map((element, i) => {
      return (
        <li key={i}>
          <a
            href={`#${element}`}
            onClick={() => changeSection(i)}
            className={`nav-link cancel-link-style spin-hover tooltip-hover ${
              i === activeSection ? "active-link" : ""
            }`}
          >
            <span className="nav-tip tooltip">{element}</span>
            <span className="nav-square spin-down" />
          </a>
        </li>
      );
    });

  return (
    <>
      <div id="nav-burguer">
        <input type="checkbox" id="burguer-check" />

        <div className="burguer-box">
          <div className="burguer-point" />
          <div className="burguer-point" />
          <div className="burguer-point" />
        </div>
      </div>

      <ul id="nav-section">{mapLinks(["top", "projects", "about"])}</ul>
    </>
  );
};
