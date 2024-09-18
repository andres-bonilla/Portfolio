import React from "react";
import { useScrollBin } from "./utils/useScrollBin";
import { useLang } from "./utils/LangProvider";

export const NavSection = () => {
  const { lang } = useLang();
  const { scrollBin } = useScrollBin();

  const mapNavLinks = (list) =>
    list.map((link, i) => {
      return (
        <li key={i}>
          <a
            href={`#${link[0]}`}
            className={`nav-link cancel-link-style spin-hover tooltip-hover ${
              i + 2 === scrollBin ? "active-link" : ""
            }`}
          >
            <span className="nav-tip tooltip">
              {link[lang === "eng" ? 0 : 1]}
            </span>
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
          <span className="burguer-point" />
          <span className="burguer-point" />
          <span className="burguer-point" />
        </div>
        <span id="burguer-cross">x</span>
      </div>

      <ul id="nav-section">
        {mapNavLinks([
          ["top", "inicio"],
          ["projects", "proyectos"],
          ["about", "sobre mi"],
        ])}
      </ul>
    </>
  );
};
