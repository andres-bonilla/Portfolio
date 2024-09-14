import React from "react";

import { socialData } from "../data/paths.json";

export const NavSocial = () => {
  const mapSocialLinks = (list) =>
    list.map((element, i) => {
      return (
        <li key={i} className="spin-hover">
          <a
            href={element.link}
            target="_blank"
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
