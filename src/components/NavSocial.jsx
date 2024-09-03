import "../styles/components/nav-social.css";
import "../styles/interactions/spin-box.css";
import "../styles/interactions/tooltip.css";
import { socialData } from "../data/paths.json";

import React from "react";

export const NavSocial = () => {
  const mapSocialLinks = (list) =>
    list.map((element, i) => {
      return (
        <li key={i} className="spin-hover">
          <a
            href={element.link}
            style={{ "--url": `url(${element.path})` }}
            className="social-link cancel-link-style spin-hover spin-down tooltip-hover"
          >
            <span className="social-tip tooltip">{element.network}</span>
            <span className="social-logo spin-down" />
          </a>
        </li>
      );
    });

  return <ul id="nav-social">{mapSocialLinks(socialData)}</ul>;
};
