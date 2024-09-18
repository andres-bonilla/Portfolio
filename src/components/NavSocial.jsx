import React from "react";

import { social } from "../data/social.json";

export const NavSocial = () => {
  const mapSocialLinks = (list) =>
    list.map((item, i) => {
      return (
        <li key={i} className="spin-hover">
          <a
            href={item.link}
            target="_blank"
            style={{ "--url": `url(${item.path})` }}
            className="social-link cancel-link-style spin-hover spin-down tooltip-hover"
          >
            <span className="social-tip tooltip">{item.network}</span>
            <span className="social-logo spin-down" />
          </a>
        </li>
      );
    });

  return <ul id="nav-social">{mapSocialLinks(social)}</ul>;
};
